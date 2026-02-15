package com.salonapp.controller;

import com.salonapp.entity.Appointment;
import com.salonapp.entity.Salon;
import com.salonapp.entity.User;
import com.salonapp.repository.AppointmentRepository;
import com.salonapp.repository.UserRepository;
import com.salonapp.service.SalonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private SalonService salonService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AppointmentRepository appointmentRepository;

    // --- Salon Management ---

    @GetMapping("/salons/pending")
    public List<Salon> getPendingSalons() {
        return salonService.getPendingSalons();
    }

    @PostMapping("/salons/{id}/approve")
    public Salon approveSalon(@PathVariable Long id) {
        return salonService.approveSalon(id);
    }

    @PostMapping("/salons/{id}/reject")
    public Salon rejectSalon(@PathVariable Long id) {
        return salonService.rejectSalon(id);
    }

    @GetMapping("/salons")
    public List<Salon> getAllSalons() {
        return salonService.getAllSalons();
    }

    // --- User Management ---

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // --- Booking Management ---

    @GetMapping("/bookings")
    public List<Appointment> getAllBookings() {
        return appointmentRepository.findAll();
    }
}
