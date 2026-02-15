package com.salonapp.controller;

import com.salonapp.entity.ServiceItem;
import com.salonapp.service.ServiceManagementService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/services")
public class SalonServiceController {

    private final ServiceManagementService service;

    public SalonServiceController(ServiceManagementService service) {
        this.service = service;
    }

    @PostMapping("/salons/{salonId}")
    public ServiceItem addService(@PathVariable Long salonId,
                                  @RequestBody ServiceItem salonService) {
        return service.addService(salonId, salonService);
    }

    @PutMapping("/{id}")
    public ServiceItem update(@PathVariable Long id,
                              @RequestBody ServiceItem salonService) {
        return service.updateService(id, salonService);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        service.deleteService(id);
        return "Service deleted";
    }

    @GetMapping("/salons/{salonId}")
    public List<ServiceItem> getBySalon(@PathVariable Long salonId) {
        return service.getServicesBySalon(salonId);
    }
}
