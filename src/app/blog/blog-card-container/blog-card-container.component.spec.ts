import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCardContainerComponent } from './blog-card-container.component';

describe('BlogCardContainerComponent', () => {
  let component: BlogCardContainerComponent;
  let fixture: ComponentFixture<BlogCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCardContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
