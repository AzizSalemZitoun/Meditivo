package tn.esprit.meditivo.Controllers;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.meditivo.DTO.LoginRequest;
import tn.esprit.meditivo.Entities.User;
import tn.esprit.meditivo.Repositories.UserRepository;
import tn.esprit.meditivo.Services.IUserService;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserRestController {

    @Autowired
    private IUserService userService;
    @Autowired
    UserRepository userRepository;

@PostMapping("/signin")
public ResponseEntity<?> signin(@RequestBody LoginRequest loginRequest) {
    String token = userService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());
    return ResponseEntity.ok(Collections.singletonMap("token", token));
}
    @PostMapping("/add")
    public User add(@Valid @RequestBody User user) {
        return userService.adduser(user);
    }

    @PutMapping("/update")
    public User update(@RequestParam Long id, @Valid @RequestBody User user) {
        return userService.modifyuser(id, user);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id") Long id) {
        userService.delete(id);
    }

    @GetMapping("/list")
    public List<User> retrieveall() {
        return userService.retrieveallusers();
    }
}