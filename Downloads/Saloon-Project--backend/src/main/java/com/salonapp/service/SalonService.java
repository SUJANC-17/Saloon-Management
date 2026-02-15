package com.salonapp.service;

import com.salonapp.entity.Salon;
import com.salonapp.entity.SalonStatus;
import com.salonapp.entity.User;
import com.salonapp.repository.SalonRepository;
import com.salonapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalonService {

    @Autowired
    private SalonRepository salonRepository;

    @Autowired
    private UserRepository userRepository;

    public Salon applyForSalon(Long ownerId, Salon salon) {

        User owner = userRepository.findById(ownerId)
                .orElseThrow(() -> new RuntimeException("Owner not found"));

        salon.setOwner(owner);
        salon.setStatus(SalonStatus.PENDING);

        return salonRepository.save(salon);
    }

    public Salon approveSalon(Long salonId) {
        Salon salon = salonRepository.findById(salonId)
                .orElseThrow(() -> new RuntimeException("Salon not found"));
        salon.setStatus(SalonStatus.APPROVED);
        return salonRepository.save(salon);
    }

    public Salon rejectSalon(Long salonId) {
        Salon salon = salonRepository.findById(salonId)
                .orElseThrow(() -> new RuntimeException("Salon not found"));
        salon.setStatus(SalonStatus.REJECTED);
        return salonRepository.save(salon);
    }

    public List<Salon> getAllSalons() {
        return salonRepository.findAll();
    }

    public List<Salon> getPendingSalons() {
        return salonRepository.findByStatus(SalonStatus.PENDING);
    }
}
