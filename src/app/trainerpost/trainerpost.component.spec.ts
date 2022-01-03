import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerpostComponent } from './trainerpost.component';

describe('TrainerpostComponent', () => {
  let component: TrainerpostComponent;
  let fixture: ComponentFixture<TrainerpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
