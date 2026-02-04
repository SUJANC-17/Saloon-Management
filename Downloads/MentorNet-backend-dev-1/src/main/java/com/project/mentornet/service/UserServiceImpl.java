package com.project.mentornet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.mentornet.dto.LoginRequest;
import com.project.mentornet.dto.RegisterRequest;
import com.project.mentornet.model.Users;
import com.project.mentornet.repository.UserRepo;
// import com.project.mentornet.security.JwtUtil;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepo userRepo;
    // private final PasswordEncoder passwordEncoder;
    // private final JwtUtil jwtUtil;

    public UserServiceImpl(UserRepo userRepo) {
        this.userRepo = userRepo;
        // this.passwordEncoder = passwordEncoder;
        // this.jwtUtil = jwtUtil;
    }

    @Override
    public List<Users> findAlignedSeniors(String role, String careerGoal) {
        List<Users> AllignedSeniors = userRepo.findAllByRoleAndCareerGoal(role, careerGoal);
        return AllignedSeniors;
    }

    // @Override
    // public void registerUser(RegisterRequest registerRequest) {
    //     Optional<Users> existingUser = userRepo.findByEmail(registerRequest.getEmail());
    //     if (existingUser.isPresent()) {
    //         throw new RuntimeException("User already exists");
    //     }

    //     Users user = new Users();
    //     user.setName(registerRequest.getName());
    //     user.setEmail(registerRequest.getEmail());
    //     user.setCollege(registerRequest.getCollege());
    //     // user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
    //     user.setRole(registerRequest.getRole());
    //     user.setCareerGoal(registerRequest.getCareerGoal());

    //     userRepo.save(user);
    // }

    // @Override
    // public String login(LoginRequest loginRequest) {
    //     Users user = userRepo.findByEmail(loginRequest.getEmail())
    //             .orElseThrow(() -> new RuntimeException("User not found"));

    //     if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
    //         throw new RuntimeException("Invalid credentials");
    //     }

    //     return jwtUtil.generateToken(user.getEmail());
    // }
}
