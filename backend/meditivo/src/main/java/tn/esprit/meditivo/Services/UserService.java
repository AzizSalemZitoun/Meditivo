package tn.esprit.meditivo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import tn.esprit.meditivo.Config.JwUtil;
import tn.esprit.meditivo.Entities.User;
import tn.esprit.meditivo.Repositories.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    JwUtil jwUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    public User adduser(User user) {
        // Encode password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public User modifyuser(Long userid, User user) {
        Optional<User> optionalUser = userRepository.findById(userid);
        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();
            existingUser.setEmail(user.getEmail());
            existingUser.setUsername(user.getUsername());

            // Only encode and update password if it's being changed
            if (user.getPassword() != null && !user.getPassword().isEmpty()) {
                existingUser.setPassword(passwordEncoder.encode(user.getPassword()));
            }

            return userRepository.save(existingUser);
        }
        throw new RuntimeException("User not found with id: " + userid);
    }

    @Override
    public void delete(Long id) {
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("User not found with id: " + id);
        }
        userRepository.deleteById(id);
    }

    @Override
    public List<User> retrieveallusers() {
        return userRepository.findAll();
    }

    @Override
    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    // Additional useful method
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

@Override
public String authenticate(String email, String password){
        Optional<User> useroptional = userRepository.findByEmail(email);
        if (useroptional.isPresent() && passwordEncoder.matches(password, useroptional.get().getPassword())) {
            User user = useroptional.get();

            if (passwordEncoder.matches(password, user.getPassword())) {
                String name = user.getUsername();
                return jwUtil.generateToken(user);
            } else {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Mot de passe incorrect.");
            }
        }
      String error =("Identifiants incorrects.");
return error;

}

}