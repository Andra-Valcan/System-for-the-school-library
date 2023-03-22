package library.backend.controller;

import library.backend.entity.User;
import library.backend.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "*")
public class UserController {
   private  final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @GetMapping("/checkUser/{email}/{password}")
    public User checkForLogin(@PathVariable String email,@PathVariable String password) {
        User u = userRepository.findByEmailAndPassword(email, password);
        System.out.println(u);
        return u;
    }
}
