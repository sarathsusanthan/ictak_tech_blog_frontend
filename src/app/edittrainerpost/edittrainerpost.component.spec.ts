import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittrainerpostComponent } from './edittrainerpost.component';

describe('EdittrainerpostComponent', () => {
  let component: EdittrainerpostComponent;
  let fixture: ComponentFixture<EdittrainerpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittrainerpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittrainerpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
