package com.salonapp.service;

import com.salonapp.entity.*;
import com.salonapp.repository.SalonRepository;
import com.salonapp.repository.TimeSlotRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TimeSlotService {

    private final TimeSlotRepository slotRepository;
    private final SalonRepository salonRepository;

    public TimeSlotService(TimeSlotRepository slotRepository,
                           SalonRepository salonRepository) {
        this.slotRepository = slotRepository;
        this.salonRepository = salonRepository;
    }

    // Owner creates slot
    public TimeSlot createSlot(Long salonId, TimeSlot slot) {
        Salon salon = salonRepository.findById(salonId)
                .orElseThrow(() -> new RuntimeException("Salon not found"));

        slot.setSalon(salon);
        slot.setStatus(SlotStatus.AVAILABLE);
        return slotRepository.save(slot);
    }

    public List<TimeSlot> getSlotsBySalon(Long salonId) {
        return slotRepository.findBySalonId(salonId);
    }

    public List<TimeSlot> getAvailableSlots(Long salonId) {
        return slotRepository.findBySalonIdAndStatus(salonId, SlotStatus.AVAILABLE);
    }

    public TimeSlot disableSlot(Long slotId) {
        TimeSlot slot = slotRepository.findById(slotId)
                .orElseThrow(() -> new RuntimeException("Slot not found"));

        slot.setStatus(SlotStatus.DISABLED);
        return slotRepository.save(slot);
    }
}
