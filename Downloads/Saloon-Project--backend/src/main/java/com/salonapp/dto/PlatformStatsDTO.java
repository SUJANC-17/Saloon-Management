package com.salonapp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlatformStatsDTO {
    private long totalUsers;
    private long totalSalons;
    private long totalBookings;
    private double revenue;
}
