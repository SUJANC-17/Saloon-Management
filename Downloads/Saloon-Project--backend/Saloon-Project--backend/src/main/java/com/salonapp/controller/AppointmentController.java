package com.salonapp.controller;

import com.salonapp.entity.Appointment;
import com.salonapp.service.AppointmentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    private final AppointmentService service;

    public AppointmentController(AppointmentService service) {
        this.service = service;
    }

    @PostMapping("/book")
    public Appointment book(@RequestParam Long userId,
                            @RequestParam Long salonId,
                            @RequestParam Long serviceId,
                            @RequestParam Long slotId) {
        return service.book(userId, salonId, serviceId, slotId);
    }

    @PutMapping("/{id}/confirm")
    public Appointment confirm(@PathVariable Long id) {
        return service.confirm(id);
    }

    @PutMapping("/{id}/cancel")
    public Appointment cancel(@PathVariable Long id) {
        return service.cancel(id);
    }

    @GetMapping("/user/{userId}")
    public List<Appointment> user(@PathVariable Long userId) {
        return service.userAppointments(userId);
    }

    @GetMapping("/salon/{salonId}")
    public List<Appointment> salon(@PathVariable Long salonId) {
        return service.salonAppointments(salonId);
    }
}
