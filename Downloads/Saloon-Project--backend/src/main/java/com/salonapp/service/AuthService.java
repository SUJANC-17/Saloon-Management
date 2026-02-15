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
    private final JwtUtil jwtUtil;

    public AuthService(UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            NotificationService notificationService,
            JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.notificationService = notificationService;
        this.jwtUtil = jwtUtil;
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
                        "\n\nYour Salon account has been created successfully.");

        return "Registered successfully";
    }

    public java.util.Map<String, String> login(LoginRequest request) {
        System.out.println("Login attempt for email: " + request.getEmail());
        User user = userRepository.findByEmail(request.getEmail())
                .orElseGet(() -> {
                    System.out.println("User not found for email: " + request.getEmail());
                    return null;
                });

        if (user == null) {
            throw new RuntimeException("Invalid email");
        }

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            System.out.println("Invalid password for email: " + request.getEmail());
            throw new RuntimeException("Invalid password");
        }

        System.out.println("Login successful for email: " + request.getEmail());

        notificationService.notifyUser(
                user,
                "Login successful at " + LocalDateTime.now());

        String token = jwtUtil.generateToken(user.getEmail(), user.getRole().name());
        return java.util.Map.of("token", token);
    }
}
