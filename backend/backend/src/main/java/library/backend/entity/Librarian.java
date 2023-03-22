package library.backend.entity;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("LIBRARIAN")
public class Librarian extends User{
    public Librarian(String name, String email, String password) {
        super(name, email, password);
    }

    public Librarian() {
    }
}
