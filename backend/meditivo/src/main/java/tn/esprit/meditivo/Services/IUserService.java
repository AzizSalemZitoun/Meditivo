package tn.esprit.meditivo.Services;

import tn.esprit.meditivo.Entities.User;

import java.util.List;

public interface IUserService {
    User adduser(User user);

    User modifyuser(Long userid, User user);

    void delete(Long id);

    List<User> retrieveallusers();

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);
}
