package com.salonapp.service;

import com.salonapp.dto.PlatformStatsDTO;
import com.salonapp.repository.AppointmentRepository;
import com.salonapp.repository.SalonRepository;
import com.salonapp.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class PlatformStatsService {

    private final UserRepository userRepository;
    private final SalonRepository salonRepository;
    private final AppointmentRepository appointmentRepository;

    public PlatformStatsService(UserRepository userRepository,
            SalonRepository salonRepository,
            AppointmentRepository appointmentRepository) {
        this.userRepository = userRepository;
        this.salonRepository = salonRepository;
        this.appointmentRepository = appointmentRepository;
    }

    public PlatformStatsDTO getPlatformStats() {
        long totalUsers = userRepository.count();
        long totalSalons = salonRepository.count();
        long totalBookings = appointmentRepository.count();

        // Mock revenue for now as Appointment might not have price field yet
        // or calculate if price exists. Let's assume $50 per booking for demo logic
        double revenue = totalBookings * 50.0;

        return new PlatformStatsDTO(totalUsers, totalSalons, totalBookings, revenue);
    }
}
