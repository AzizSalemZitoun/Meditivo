package tn.esprit.meditivo.Entities;

import jakarta.persistence.*;

@Entity
public class Session {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long idSession;

    @ManyToOne
    User user;
    private int duration; // in minutes
    private String soundFileName;

    public Long getIdSession() {
        return idSession;
    }

    public void setIdSession(Long idSession) {
        this.idSession = idSession;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public String getSoundFileName() {
        return soundFileName;
    }

    public void setSoundFileName(String soundFileName) {
        this.soundFileName = soundFileName;
    }
}
