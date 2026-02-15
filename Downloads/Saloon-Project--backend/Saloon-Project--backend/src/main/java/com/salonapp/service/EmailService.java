package com.salonapp.service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
@Service
public class EmailService {

    private final JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendEmail(String to, String subject, String body) {

        try {
            SimpleMailMessage msg = new SimpleMailMessage();
            msg.setFrom("salon.project.mail@gmail.com");
            msg.setTo(to);
            msg.setSubject(subject);
            msg.setText(body);

            mailSender.send(msg);

            System.out.println("✅ Email sent to: " + to);

        } catch (Exception e) {
            System.out.println("❌ Email failed: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
