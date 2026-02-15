package com.salonapp.repository;

import com.salonapp.entity.TimeSlot;
import com.salonapp.entity.SlotStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TimeSlotRepository extends JpaRepository<TimeSlot, Long> {

    List<TimeSlot> findBySalonId(Long salonId);
    List<TimeSlot> findBySalonIdAndStatus(Long salonId, SlotStatus status);
}
