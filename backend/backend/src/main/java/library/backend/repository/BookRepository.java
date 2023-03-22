package library.backend.repository;

import library.backend.entity.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {
    void deleteBookById(Long id);
    Book findBookById(Long id);
}
