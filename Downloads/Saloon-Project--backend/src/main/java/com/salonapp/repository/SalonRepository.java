package com.salonapp.repository;

import com.salonapp.entity.Salon;
import com.salonapp.entity.SalonStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SalonRepository extends JpaRepository<Salon, Long> {

    List<Salon> findByOwnerId(Long ownerId);
    List<Salon> findByStatus(SalonStatus status);
}
