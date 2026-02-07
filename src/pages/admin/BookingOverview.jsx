import React, { useState, useEffect } from 'react';
import Table from '../../components/ui/Table';
import adminService from '../../services/adminService';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

const BookingOverview = () => {
    const [bookings, setBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            setIsLoading(true);
            const data = await adminService.getAllBookings();
            setBookings(data);
        } catch (error) {
            console.error("Error fetching bookings:", error);
            // Mock data
            setBookings([
                { id: 'BK-001', customer: 'Alice Wilson', salon: 'Glamour Haven', service: 'Haircut', amount: 45, status: 'COMPLETED', date: '2025-02-05' },
                { id: 'BK-002', customer: 'Bob Thompson', salon: 'Style Central', service: 'Manicure', amount: 30, status: 'PENDING', date: '2025-02-07' },
                { id: 'BK-003', customer: 'David Miller', salon: 'Glamour Haven', service: 'Facial', amount: 60, status: 'CANCELLED', date: '2025-02-06' },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const columns = [
        { header: 'ID', accessor: 'id' },
        { header: 'Customer', accessor: 'customer' },
        { header: 'Salon', accessor: 'salon' },
        { header: 'Service', accessor: 'service' },
        { header: 'Amount', render: (row) => `$${row.amount}` },
        {
            header: 'Status',
            render: (row) => (
                <span className={`status-badge ${row.status.toLowerCase()}`}>
                    {row.status}
                </span>
            )
        },
        { header: 'Date', accessor: 'date' },
    ];

    return (
        <div className="admin-dashboard-page">
            <header className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1>Booking Overview</h1>
                    <p>Global view of all platform bookings</p>
                </div>
                <Link to="/admin">
                    <Button variant="secondary">Back to Dashboard</Button>
                </Link>
            </header>

            <div className="dashboard-content">
                <div className="page-section" style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <Table columns={columns} data={bookings} isLoading={isLoading} />
                </div>
            </div>

            <style>{`
        .status-badge {
          padding: 0.25rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .status-badge.completed { background-color: #d1fae5; color: #065f46; }
        .status-badge.pending { background-color: #fef3c7; color: #92400e; }
        .status-badge.cancelled { background-color: #fee2e2; color: #991b1b; }
      `}</style>
        </div>
    );
};

export default BookingOverview;
