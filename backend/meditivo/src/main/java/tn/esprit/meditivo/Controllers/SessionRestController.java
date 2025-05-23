package tn.esprit.meditivo.Controllers;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;
import tn.esprit.meditivo.Config.JwUtil;
import tn.esprit.meditivo.DTO.LoginRequest;
import tn.esprit.meditivo.DTO.SessionRequest;
import tn.esprit.meditivo.Entities.Session;
import tn.esprit.meditivo.Entities.User;
import tn.esprit.meditivo.Repositories.SessionRepository;
import tn.esprit.meditivo.Repositories.UserRepository;
import tn.esprit.meditivo.Services.SessionService;
import tn.esprit.meditivo.Services.UserDetailsService;

import java.util.List;

@RestController
@RequestMapping("/session")
public class SessionRestController {
    @Autowired
    SessionRepository sessionRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    SessionService sessionService;
    @Autowired
UserDetailsService userDetailsService;
    @Autowired
    JwUtil jwUtil;
    @CrossOrigin("*")
    @PostMapping("/savesession")
    public ResponseEntity<?> saveSession(
            @RequestBody SessionRequest request,
            @RequestHeader("Authorization") String authHeader) {

        String jwt = authHeader.replace("Bearer ", "");
        String email = jwUtil.extractUsername(jwt); // or however you parse token

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        Session session = new Session();
        session.setDuration(request.getDuration());
        session.setSoundFileName(request.getSound());
        session.setUser(user);

        sessionRepository.save(session);

        return ResponseEntity.ok("Session saved");
    }

    @GetMapping("/fetchsessions")
    public ResponseEntity<List<Session>> fetchSessions(@RequestBody HttpServletRequest request) {
      String authHeader = request.getHeader("Authorization");
      String token= null;
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            token = authHeader.substring(7);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        String email = jwUtil.extractUsername(token); // Assuming your JWT subject is email

        // Fetch sessions based on email
        List<Session> sessions = sessionService.fetchSessions(email);

        return ResponseEntity.ok(sessions);

    }


}
