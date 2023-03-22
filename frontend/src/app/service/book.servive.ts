import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Book} from "../model/book";




@Injectable({providedIn:'root'})
export class BookService{
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient){}

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiServerUrl}/api/book/getBooks`);
  }

  public addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiServerUrl}/api/book/addBook`,book);
  }

  public updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiServerUrl}/api/book/bookUpdate`, book);
  }

  public deleteBook(bookId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/book/delete/${bookId}`);
  }
}
