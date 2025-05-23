package tn.esprit.meditivo.Services;

import tn.esprit.meditivo.Entities.Session;

import java.util.List;

public interface ISessionService {




    List<Session> fetchSessions(String email);
}
