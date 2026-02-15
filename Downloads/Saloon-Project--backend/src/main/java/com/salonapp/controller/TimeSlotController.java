package com.salonapp.controller;

import com.salonapp.entity.TimeSlot;
import com.salonapp.service.TimeSlotService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/timeslots")
public class TimeSlotController {

    private final TimeSlotService service;

    public TimeSlotController(TimeSlotService service) {
        this.service = service;
    }

    // Create slot
    @PostMapping("/salon/{salonId}")
    public TimeSlot create(@PathVariable Long salonId,
                           @RequestBody TimeSlot slot) {
        return service.createSlot(salonId, slot);
    }

    // Get all slots
    @GetMapping("/salon/{salonId}")
    public List<TimeSlot> getAll(@PathVariable Long salonId) {
        return service.getSlotsBySalon(salonId);
    }

    // Get available slots
    @GetMapping("/salon/{salonId}/available")
    public List<TimeSlot> getAvailable(@PathVariable Long salonId) {
        return service.getAvailableSlots(salonId);
    }

    // Disable slot
    @PutMapping("/{slotId}/disable")
    public TimeSlot disable(@PathVariable Long slotId) {
        return service.disableSlot(slotId);
    }
}
