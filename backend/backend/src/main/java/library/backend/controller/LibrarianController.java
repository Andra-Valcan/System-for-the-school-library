package library.backend.controller;

import library.backend.entity.Book;
import library.backend.entity.Librarian;
import library.backend.repository.LibrarianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/librarian")
public class LibrarianController {
    @Autowired
    private final LibrarianRepository librarianRepository;

    public LibrarianController(LibrarianRepository librarianRepository) {
        this.librarianRepository = librarianRepository;
    }

    @PostMapping("/addLibrarian")
    public Librarian createEmployee(@RequestBody Librarian librarian) {
        return librarianRepository.save(librarian);
    }
}
