package com.salonapp.service;

import com.salonapp.entity.Salon;
import com.salonapp.entity.ServiceItem;
import com.salonapp.repository.SalonRepository;
import com.salonapp.repository.ServiceItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class  ServiceManagementService {

    private final ServiceItemRepository serviceRepository;
    private final SalonRepository salonRepository;

    public ServiceManagementService(ServiceItemRepository serviceRepository,
                                    SalonRepository salonRepository) {
        this.serviceRepository = serviceRepository;
        this.salonRepository = salonRepository;
    }

    public ServiceItem addService(Long salonId, ServiceItem service) {
        Salon salon = salonRepository.findById(salonId)
                .orElseThrow(() -> new RuntimeException("Salon not found"));

        service.setSalon(salon);
        return serviceRepository.save(service);
    }

    public ServiceItem updateService(Long serviceId, ServiceItem updated) {
        ServiceItem service = serviceRepository.findById(serviceId)
                .orElseThrow(() -> new RuntimeException("Service not found"));

        service.setName(updated.getName());
        service.setDescription(updated.getDescription());
        service.setPrice(updated.getPrice());
        service.setDurationMinutes(updated.getDurationMinutes());
        service.setIsActive(updated.getIsActive());

        return serviceRepository.save(service);
    }

    public void deleteService(Long serviceId) {
        serviceRepository.deleteById(serviceId);
    }

    public List<ServiceItem> getServicesBySalon(Long salonId) {
        return serviceRepository.findBySalonId(salonId);
    }
}
