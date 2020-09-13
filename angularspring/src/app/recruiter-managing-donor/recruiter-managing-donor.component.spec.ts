import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterManagingDonorComponent } from './recruiter-managing-donor.component';

describe('RecruiterManagingDonorComponent', () => {
  let component: RecruiterManagingDonorComponent;
  let fixture: ComponentFixture<RecruiterManagingDonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterManagingDonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterManagingDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
