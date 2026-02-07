import React, { useState, useEffect } from 'react';
import Table from '../../components/ui/Table';
import adminService from '../../services/adminService';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            setIsLoading(true);
            const data = await adminService.getAllUsers();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
            // Mock data
            setUsers([
                { id: 1, name: 'Alice Wilson', email: 'alice@example.com', role: 'USER', joinedDate: '2025-01-15' },
                { id: 2, name: 'Bob Thompson', email: 'bob@example.com', role: 'USER', joinedDate: '2025-01-20' },
                { id: 3, name: 'Charlie Davis', email: 'charlie@example.com', role: 'OWNER', joinedDate: '2025-02-01' },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const columns = [
        { header: 'ID', accessor: 'id', width: '50px' },
        { header: 'Name', accessor: 'name' },
        { header: 'Email', accessor: 'email' },
        { header: 'Role', accessor: 'role' },
        { header: 'Joined Date', accessor: 'joinedDate' },
        {
            header: 'Actions',
            render: (user) => (
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Button variant="secondary" size="small">Edit</Button>
                    <Button variant="danger" size="small">Deactivate</Button>
                </div>
            ),
        },
    ];

    return (
        <div className="admin-dashboard-page">
            <header className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1>User Management</h1>
                    <p>View and manage platform users</p>
                </div>
                <Link to="/admin">
                    <Button variant="secondary">Back to Dashboard</Button>
                </Link>
            </header>

            <div className="dashboard-content">
                <div className="page-section" style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <Table columns={columns} data={users} isLoading={isLoading} />
                </div>
            </div>
        </div>
    );
};

export default UserManagement;
