import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianMenuComponent } from './librarian-menu.component';

describe('LibrarianMenuComponent', () => {
  let component: LibrarianMenuComponent;
  let fixture: ComponentFixture<LibrarianMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarianMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
