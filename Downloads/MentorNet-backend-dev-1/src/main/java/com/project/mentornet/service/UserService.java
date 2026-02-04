package com.project.mentornet.service;

import java.util.List;
import com.project.mentornet.model.Users;
// import com.project.mentornet.dto.RegisterRequest;
// import com.project.mentornet.dto.LoginRequest;

public interface UserService {
    List<Users> findAlignedSeniors(String role, String careerGoal);

    // void registerUser(RegisterRequest registerRequest);

    // String login(LoginRequest loginRequest);
}
