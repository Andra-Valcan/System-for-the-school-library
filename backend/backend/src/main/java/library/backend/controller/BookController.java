package library.backend.controller;

import jakarta.transaction.Transactional;
import library.backend.entity.Book;

import library.backend.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/book")
@CrossOrigin(origins = "*")
public class BookController {
    @Autowired
    private final BookRepository bookRepository;

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }



    @PostMapping(value = "/addBook")
    public ResponseEntity<Book> addBook(@RequestBody Book book)  {
       Book newBook = bookRepository.save(book);
       return  new ResponseEntity<>(newBook, HttpStatus.CREATED);

    }
    @GetMapping("/getBooks")
    public List<Book> getBooks(){
        return (List<Book>) bookRepository.findAll();
    }

    @Transactional
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable("id") Long id){
        bookRepository.deleteBookById(id);
        return  new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/bookUpdate")
    public ResponseEntity<?> updateBook(@RequestBody Book book){
        Book updateBook = bookRepository.save(book);
        return new ResponseEntity<>(updateBook, HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable("id") Long id){
        Book book = bookRepository.findBookById(id);
        return new ResponseEntity<>(book, HttpStatus.OK);
    }

}
