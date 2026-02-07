import React, { useState, useEffect } from 'react';
import AdminStatsCard from '../../components/admin/AdminStatsCard';
import analyticsService from '../../services/analyticsService';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalSalons: 0,
        totalBookings: 0,
        revenue: 0
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const data = await analyticsService.getPlatformStats();
                setStats(data);
            } catch (error) {
                console.error("Error fetching stats:", error);
                // Mock data for demonstration if API fails
                setStats({
                    totalUsers: 1540,
                    totalSalons: 85,
                    totalBookings: 3200,
                    revenue: 45000
                });
            } finally {
                setIsLoading(false);
            }
        };

        fetchStats();
    }, []);

    return (
        <div className="admin-dashboard-page">
            <header className="page-header">
                <h1>Admin Dashboard</h1>
                <p>Platform overview and real-time statistics</p>
            </header>

            <div className="stats-grid">
                <AdminStatsCard
                    title="Total Users"
                    value={stats.totalUsers}
                    icon="👥"
                    trend={{ type: 'up', value: 12 }}
                    color="blue"
                />
                <AdminStatsCard
                    title="Active Salons"
                    value={stats.totalSalons}
                    icon="🏢"
                    trend={{ type: 'up', value: 5 }}
                    color="green"
                />
                <AdminStatsCard
                    title="Total Bookings"
                    value={stats.totalBookings}
                    icon="📅"
                    trend={{ type: 'up', value: 8 }}
                    color="purple"
                />
                <AdminStatsCard
                    title="Total Revenue"
                    value={`$${stats.revenue}`}
                    icon="💰"
                    trend={{ type: 'up', value: 15 }}
                    color="orange"
                />
            </div>

            <div className="dashboard-content">
                <div className="quick-actions" style={{ marginBottom: '2rem' }}>
                    <h3>Quick Actions</h3>
                    <div className="action-buttons">
                        <Link to="/admin/partner-approval" className="action-btn">Manage Partner Requests</Link>
                        <Link to="/admin/users" className="action-btn">User Management</Link>
                        <Link to="/admin/bookings" className="action-btn">View All Bookings</Link>
                    </div>
                </div>

                <div className="recent-activity">
                    <h3>Recent Platform Activity</h3>
                    <div className="activity-list">
                        <div className="activity-item">
                            <span className="activity-icon join">👤</span>
                            <div className="activity-details">
                                <p className="activity-text"><strong>New User Registered</strong>: Alice Thompson joined the platform.</p>
                                <span className="activity-time">2 minutes ago</span>
                            </div>
                        </div>
                        <div className="activity-item">
                            <span className="activity-icon book">📅</span>
                            <div className="activity-details">
                                <p className="activity-text"><strong>New Booking</strong>: John Smith booked a Haircut at 'Glamour Haven'.</p>
                                <span className="activity-time">15 minutes ago</span>
                            </div>
                        </div>
                        <div className="activity-item">
                            <span className="activity-icon salon">🏢</span>
                            <div className="activity-details">
                                <p className="activity-text"><strong>New Partner Request</strong>: 'Vogue Styles' applied for partnership.</p>
                                <span className="activity-time">1 hour ago</span>
                            </div>
                        </div>
                        <div className="activity-item">
                            <span className="activity-icon complete">✅</span>
                            <div className="activity-details">
                                <p className="activity-text"><strong>Salon Approved</strong>: 'Urban Cuts' is now live on the platform.</p>
                                <span className="activity-time">2 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
