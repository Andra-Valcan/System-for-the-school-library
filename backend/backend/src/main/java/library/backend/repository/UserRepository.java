package library.backend.repository;

import library.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
//@NoRepositoryBean
public interface UserRepository extends CrudRepository<User, Long> {


   User findByEmailAndPassword(String email, String password);


}
