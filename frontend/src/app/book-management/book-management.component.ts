import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {BookService} from "../service/book.servive";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {DomSanitizer} from "@angular/platform-browser";
import {Book} from "../model/book";
import {MatDialog} from "@angular/material/dialog";





@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css']
})
export class BookManagementComponent implements OnInit {
  public books: Book[];
  public editBook: Book;
  public deleteBook: Book;
  constructor(private bookService: BookService) {
  }
  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks():void {
    this.bookService.getBooks().subscribe(
      (response: Book[])=>{
        this.books = response;
        console.log(this.books);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  public onAddBook(addForm:NgForm): void{

if(addForm.value.title==null ||
  addForm.value.author==null ||
  addForm.value.amount==null ||
  addForm.value.imageUrl==null)
  {alert("Pentru a adauga o noua carte trebuie sa completati toate campurile")}else{
    this.bookService.addBook(addForm.value).subscribe(
      (response: Book)=>{
        console.log(response);
        this.getBooks();
        addForm.reset();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    );
  }}

  public  onUpdateBook(book: Book):void{
    this.bookService.updateBook(book).subscribe(
      (response: Book)=>{
        console.log(response);
        this.getBooks();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }

    );
  }

  public onDeleteBook(book: Book):void{
    this.bookService.deleteBook(book.id).subscribe(
      (response: void)=>{
        console.log(response);
        this.getBooks();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  public searchBooks(key: string): void {
    console.log(key);
      const results: Book[] = [];
    for (const book of this.books) {
      if (book.title.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || book.author.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(book);
      }
    }
    this.books = results;
    if (results.length === 0 || !key) {
      this.getBooks();
    }
  }

  public onOpenModal(employee: Book, mode: string): void {
    alert("a mers")
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addBookModal');
    }
    if (mode === 'edit') {
      this.editBook = employee;
      button.setAttribute('data-target', '#updateBookModal');
    }
    if (mode === 'delete') {
      this.deleteBook = employee;
      button.setAttribute('data-target', '#deleteBookModal');
    }
    // @ts-ignore
    container.appendChild(button);
    button.click();
  }


}
