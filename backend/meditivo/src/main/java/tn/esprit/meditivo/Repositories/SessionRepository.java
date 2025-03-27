package tn.esprit.meditivo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.meditivo.Entities.Session;
import tn.esprit.meditivo.Entities.User;

@Repository
public interface SessionRepository extends JpaRepository<Session,Long> {
}
