package com.salonapp.controller;

import com.salonapp.dto.PlatformStatsDTO;
import com.salonapp.service.PlatformStatsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/analytics")
public class AnalyticsController {

    private final PlatformStatsService platformStatsService;

    public AnalyticsController(PlatformStatsService platformStatsService) {
        this.platformStatsService = platformStatsService;
    }

    @GetMapping("/platform-stats")
    public PlatformStatsDTO getPlatformStats() {
        return platformStatsService.getPlatformStats();
    }
}
