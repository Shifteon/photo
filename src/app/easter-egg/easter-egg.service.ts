import { Injectable } from "@angular/core";
import { NavigationEnd, Route, Router } from "@angular/router";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class EasterEggService {
    $iconPathUpated = new BehaviorSubject<string>("../../assets/images/turtle.png");
    private iconPath = "../../assets/images/turtle.png"; 

    constructor(private router: Router) {}

    init() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                if (event.url === "/8-22" || event.url === "/birthday") {
                    this.birthdayMode();
                    this.router.navigate(["/"]);
                }
            }
        })
    }

    getIconPath() {
        return this.iconPath;
    }

    private birthdayMode() {
        const htmlElement = document.querySelector('html');
        htmlElement?.classList.add('purple');
        this.iconPath = "../../assets/images/camera_celebrate.png";
        this.$iconPathUpated.next(this.iconPath);
    }
}