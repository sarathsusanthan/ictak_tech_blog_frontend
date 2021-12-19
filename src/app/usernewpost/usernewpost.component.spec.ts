import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernewpostComponent } from './usernewpost.component';

describe('UsernewpostComponent', () => {
  let component: UsernewpostComponent;
  let fixture: ComponentFixture<UsernewpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernewpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernewpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
