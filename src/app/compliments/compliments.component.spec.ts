import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplimentsComponent } from './compliments.component';

describe('ComplimentsComponent', () => {
  let component: ComplimentsComponent;
  let fixture: ComponentFixture<ComplimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplimentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
