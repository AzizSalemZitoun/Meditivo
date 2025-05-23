package tn.esprit.meditivo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.meditivo.Entities.Session;
import tn.esprit.meditivo.Entities.User;
import tn.esprit.meditivo.Repositories.SessionRepository;
import tn.esprit.meditivo.Repositories.UserRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SessionService implements ISessionService{
    @Autowired
    SessionRepository sessionRepository;
    @Autowired
    UserService userService;
    @Autowired
    UserRepository userRepository;

    @Override
    public List<Session> fetchSessions(String email){
        User user = userRepository.findByEmail(email).get();
        List<Session> sessions =
        sessionRepository.findAll().stream()
                .filter(s->s.getUser().getId().equals(user.getId()))
                .collect(Collectors.toList());
                return sessions;





    }

}
