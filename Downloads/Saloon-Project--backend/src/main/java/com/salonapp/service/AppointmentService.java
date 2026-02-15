package com.salonapp.service;

import com.salonapp.entity.*;
import com.salonapp.repository.*;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AppointmentService {

    private final AppointmentRepository appointmentRepo;
    private final UserRepository userRepo;
    private final SalonRepository salonRepo;
    private final ServiceItemRepository serviceRepo;
    private final TimeSlotRepository slotRepo;
    private final NotificationService notificationService;

    public AppointmentService(AppointmentRepository appointmentRepo,
                              UserRepository userRepo,
                              SalonRepository salonRepo,
                              ServiceItemRepository serviceRepo,
                              TimeSlotRepository slotRepo,
                              NotificationService notificationService) {
        this.appointmentRepo = appointmentRepo;
        this.userRepo = userRepo;
        this.salonRepo = salonRepo;
        this.serviceRepo = serviceRepo;
        this.slotRepo = slotRepo;
        this.notificationService = notificationService;
    }

    // ================= BOOK =================

    public Appointment book(Long userId, Long salonId, Long serviceId, Long slotId) {

        User user = userRepo.findById(userId).orElseThrow();
        Salon salon = salonRepo.findById(salonId).orElseThrow();
        ServiceItem service = serviceRepo.findById(serviceId).orElseThrow();
        TimeSlot slot = slotRepo.findById(slotId).orElseThrow();

        if (slot.getStatus() != SlotStatus.AVAILABLE) {
            throw new RuntimeException("Slot not available");
        }

        Appointment ap = new Appointment();
        ap.setUser(user);
        ap.setSalon(salon);
        ap.setServiceItem(service);
        ap.setTimeSlot(slot);
        ap.setAppointmentTime(LocalDateTime.now());
        ap.setStatus(AppointmentStatus.PENDING);

        slot.setStatus(SlotStatus.BOOKED);
        slotRepo.save(slot);

        Appointment saved = appointmentRepo.save(ap);

        notificationService.notifyUser(
                user,
                "Appointment Booked ✅\n\n" +
                        "Salon: " + salon.getName() +
                        "\nService: " + service.getName() +
                        "\nDate: " + slot.getSlotDate() +
                        "\nTime: " + slot.getStartTime()
        );



        return saved;
    }

    // ================= CONFIRM =================

    public Appointment confirm(Long id) {
        Appointment ap = appointmentRepo.findById(id).orElseThrow();
        ap.setStatus(AppointmentStatus.CONFIRMED);

        Appointment saved = appointmentRepo.save(ap);

        notificationService.notifyUser(
                ap.getUser(),
                "Appointment Confirmed ✅\n\n" +
                        "Salon: " + ap.getSalon().getName()
        );



        return saved;
    }

    // ================= CANCEL =================

    public Appointment cancel(Long id) {
        Appointment ap = appointmentRepo.findById(id).orElseThrow();
        ap.setStatus(AppointmentStatus.CANCELLED);

        ap.getTimeSlot().setStatus(SlotStatus.AVAILABLE);
        slotRepo.save(ap.getTimeSlot());

        Appointment saved = appointmentRepo.save(ap);

        notificationService.notifyUser(
                ap.getUser(),
                "Appointment Cancelled ❌\n\n" +
                        "Salon: " + ap.getSalon().getName()
        );






        return saved;
    }

    // ================= LIST =================

    public List<Appointment> userAppointments(Long userId) {
        return appointmentRepo.findByUserId(userId);
    }

    public List<Appointment> salonAppointments(Long salonId) {
        return appointmentRepo.findBySalonId(salonId);
    }
}
