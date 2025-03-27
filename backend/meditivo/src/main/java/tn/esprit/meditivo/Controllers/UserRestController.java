package tn.esprit.meditivo.Controllers;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.meditivo.Entities.User;
import tn.esprit.meditivo.Services.IUserService;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserRestController {

    @Autowired
    private IUserService userService;



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