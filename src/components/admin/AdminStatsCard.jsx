import React from 'react';
import './AdminStatsCard.css';

const AdminStatsCard = ({ title, value, icon, trend, color = 'blue' }) => {
    return (
        <div className={`admin-stats-card ${color}`}>
            <div className="card-icon">
                {icon}
            </div>
            <div className="card-info">
                <h4 className="card-title">{title}</h4>
                <p className="card-value">{value}</p>
                {trend && (
                    <span className={`card-trend ${trend.type}`}>
                        {trend.type === 'up' ? '↑' : '↓'} {trend.value}%
                    </span>
                )}
            </div>
        </div>
    );
};

export default AdminStatsCard;
