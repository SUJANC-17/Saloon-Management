package com.salonapp.controller;

import com.salonapp.entity.Salon;
import com.salonapp.service.SalonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private SalonService salonService;

    @PutMapping("/salons/{id}/approve")
    public Salon approveSalon(@PathVariable Long id) {
        return salonService.approveSalon(id);
    }
}
