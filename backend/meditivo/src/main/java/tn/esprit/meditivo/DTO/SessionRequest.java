package tn.esprit.meditivo.DTO;

public class SessionRequest {
    private int duration;
    private String sound;

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public String getSound() {
        return sound;
    }

    public void setSound(String sound) {
        this.sound = sound;
    }
}