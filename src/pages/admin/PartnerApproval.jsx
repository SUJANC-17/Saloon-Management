import React, { useState, useEffect } from 'react';
import PartnerApprovalList from '../../components/admin/PartnerApprovalList';
import adminService from '../../services/adminService';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

const PartnerApproval = () => {
    const [pendingSalons, setPendingSalons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchPendingSalons();
    }, []);

    const fetchPendingSalons = async () => {
        try {
            setIsLoading(true);
            const data = await adminService.getPendingSalons();
            setPendingSalons(data);
        } catch (error) {
            console.error("Error fetching pending salons:", error);
            // Mock data for demonstration
            setPendingSalons([
                { id: 1, name: 'Glamour Haven', ownerName: 'John Doe', location: 'New York, NY', email: 'john@glamour.com' },
                { id: 2, name: 'Style Central', ownerName: 'Jane Smith', location: 'Los Angeles, CA', email: 'jane@style.com' },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleApprove = async (id) => {
        if (window.confirm("Are you sure you want to approve this salon?")) {
            try {
                await adminService.approveSalon(id);
                setPendingSalons(pendingSalons.filter(s => s.id !== id));
                alert("Salon approved successfully!");
            } catch (error) {
                console.error("Error approving salon:", error);
                // Fallback for demo
                setPendingSalons(pendingSalons.filter(s => s.id !== id));
                alert("Salon approved (Demo Mode)!");
            }
        }
    };

    const handleReject = async (id) => {
        if (window.confirm("Are you sure you want to reject this salon?")) {
            try {
                await adminService.rejectSalon(id);
                setPendingSalons(pendingSalons.filter(s => s.id !== id));
                alert("Salon rejected.");
            } catch (error) {
                console.error("Error rejecting salon:", error);
                // Fallback for demo
                setPendingSalons(pendingSalons.filter(s => s.id !== id));
                alert("Salon rejected (Demo Mode).");
            }
        }
    };

    return (
        <div className="admin-dashboard-page">
            <header className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1>Partner Approval</h1>
                    <p>Review and approve new salon partners</p>
                </div>
                <Link to="/admin">
                    <Button variant="secondary">Back to Dashboard</Button>
                </Link>
            </header>

            <div className="dashboard-content">
                <div className="page-section" style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <PartnerApprovalList
                        salons={pendingSalons}
                        onApprove={handleApprove}
                        onReject={handleReject}
                        isLoading={isLoading}
                    />
                </div>
            </div>
        </div>
    );
};

export default PartnerApproval;
