import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianInboxComponent } from './librarian-inbox.component';

describe('LibrarianInboxComponent', () => {
  let component: LibrarianInboxComponent;
  let fixture: ComponentFixture<LibrarianInboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianInboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarianInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
