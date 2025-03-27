package tn.esprit.meditivo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.meditivo.Repositories.SessionRepository;

@Service
public class SessionService implements ISessionService{
    @Autowired
    SessionRepository sessionRepository;
}
