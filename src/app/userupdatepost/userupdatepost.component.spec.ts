import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserupdatepostComponent } from './userupdatepost.component';

describe('UserupdatepostComponent', () => {
  let component: UserupdatepostComponent;
  let fixture: ComponentFixture<UserupdatepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserupdatepostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserupdatepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
