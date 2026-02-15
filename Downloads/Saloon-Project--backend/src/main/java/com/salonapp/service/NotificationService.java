package com.salonapp.service;

import com.salonapp.entity.Notification;
import com.salonapp.entity.User;
import com.salonapp.repository.NotificationRepository;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {

    private final NotificationRepository repo;
    private final EmailService emailService;

    public NotificationService(NotificationRepository repo,
                               EmailService emailService) {
        this.repo = repo;
        this.emailService = emailService;
    }

    public void notifyUser(User user, String message) {

        Notification n = new Notification();
        n.setUser(user);
        n.setMessage(message);
        repo.save(n);

        emailService.sendEmail(
                user.getEmail(),
                "Salon System Notification",
                message
        );
    }
}
