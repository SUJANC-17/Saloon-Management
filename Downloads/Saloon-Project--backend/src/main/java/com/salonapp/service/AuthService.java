package com.salonapp.service;

import com.salonapp.dto.LoginRequest;
import com.salonapp.dto.RegisterRequest;
import com.salonapp.entity.Role;
import com.salonapp.entity.User;
import com.salonapp.repository.UserRepository;
import com.salonapp.security.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final NotificationService notificationService;

    public AuthService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder,
                       NotificationService notificationService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.notificationService = notificationService;
    }

    public String register(RegisterRequest request) {

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setPhone(request.getPhone());
        user.setRole(Role.USER);

        userRepository.save(user);

        notificationService.notifyUser(
                user,
                "Welcome " + user.getName() +
                        "\n\nYour Salon account has been created successfully."
        );


        return "Registered successfully";
    }

    public String login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid email"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        notificationService.notifyUser(
                user,
                "Login successful at " + LocalDateTime.now()
        );

        return JwtUtil.generateToken(user.getEmail());
    }
}
