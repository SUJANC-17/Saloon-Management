package com.salonapp.repository;

import com.salonapp.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    List<Appointment> findByUserId(Long userId);
    List<Appointment> findBySalonId(Long salonId);
}
