package com.salonapp.controller;

import com.salonapp.entity.Salon;
import com.salonapp.service.SalonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/salons")
public class SalonController {

    @Autowired
    private SalonService salonService;

    // Apply for salon
    @PostMapping("/apply")
    public Salon apply(@RequestParam Long ownerId, @RequestBody Salon salon) {
        return salonService.applyForSalon(ownerId, salon);
    }

    // Get all salons
    @GetMapping
    public List<Salon> getAll() {
        return salonService.getAllSalons();
    }

    // Approve salon (ADMIN)
    @PutMapping("/{id}/approve")
    public Salon approve(@PathVariable Long id) {
        return salonService.approveSalon(id);
    }

    // Reject salon (ADMIN)
    @PutMapping("/{id}/reject")
    public Salon reject(@PathVariable Long id) {
        return salonService.rejectSalon(id);
    }
}
