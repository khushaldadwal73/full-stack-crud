package com.example.demo.controlller;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.Exception.UserNotFoundExceptioin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping()
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping()
    List<User> getAllUsers()
    {
        return  userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable long id){
        return userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundExceptioin(id));
    }
    @PutMapping("/user/{id}")
    User update (@RequestBody User newUser,@PathVariable long id){
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                }).orElseThrow(()-> new UserNotFoundExceptioin(id));
    }


    @GetMapping("/user/delete/{id}")
    String deleteUser(@PathVariable Long id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundExceptioin(id);
        }
        userRepository.deleteById(id);
        return "User with id" + id + "has been deleted successfully .";
    }
}
