package com.project.mentornet.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterRequest {
    private String name;
    private String email;
    private String college;
    private String password;
    private String role;
    private String careerGoal;
   
}
