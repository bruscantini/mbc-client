import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllApartmentsComponent } from './all-apartments.component';

describe('AllApartmentsComponent', () => {
  let component: AllApartmentsComponent;
  let fixture: ComponentFixture<AllApartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllApartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllApartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
