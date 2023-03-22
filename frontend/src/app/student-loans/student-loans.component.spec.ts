import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLoansComponent } from './student-loans.component';

describe('StudentLoansComponent', () => {
  let component: StudentLoansComponent;
  let fixture: ComponentFixture<StudentLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLoansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
