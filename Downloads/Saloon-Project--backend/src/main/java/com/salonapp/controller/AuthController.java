package com.salonapp.controller;

import com.salonapp.dto.LoginRequest;
import com.salonapp.dto.RegisterRequest;
import com.salonapp.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    @PostMapping("/login")
    public java.util.Map<String, String> login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }
}
