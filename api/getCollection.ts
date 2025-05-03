import type { VercelRequest, VercelResponse } from '@vercel/node';
import { DynamoDBClient, GetItemCommand } from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const TABLE_NAME = process.env['TABLE_NAME'];
const BUCKET_NAME = process.env['BUCKET_NAME'];

export default async function getCollection(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "POST") return;

    const collectionId = req.body.collectionId;

    if (!collectionId) {
        res.status(400).json({message: "Please provide the collectionID"});
        return;
    }

    try {
        const collection = await getCollectionFromDb(collectionId);
        if (collection) {
            res.status(200).json({"collection": collection});
            return;
        } else {
            res.status(500).json({message: "Failed to receive collection. It may not exist"});
            return;
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Failed to retrieve collection"});
        return;
    }
}

const getCollectionFromDb = async (collectionId: string) => {
    const client = new DynamoDBClient();

    // Set the parameters
    const params = {
        TableName: TABLE_NAME,
        Key: marshall({title: collectionId})
    };
    const command = new GetItemCommand(params);
    const result = await client.send(command);

    if (!result.Item) return null;
    // parse results
    try {
        const collection = unmarshall(result.Item);
        const photos = [];
        for (const key of collection['photos']) {
            const url = await getFileUrl(key);
            photos.push(url);
        }
        collection['photos'] = photos;
        return collection;
    } catch (err) {
        console.error(err);
        return null;
    }
}

const getFileUrl = async (key: string) => {
    const s3Client = new S3Client();

    const params = {
        Key: key,
        Bucket: BUCKET_NAME
    }
    const command = new GetObjectCommand(params);

    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    if (url) {
        return url;
    } else {
        return null;
    }
}