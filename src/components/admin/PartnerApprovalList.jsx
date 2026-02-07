import React from 'react';
import Table from '../ui/Table';
import Button from '../ui/Button';

const PartnerApprovalList = ({ salons, onApprove, onReject, isLoading }) => {
    const columns = [
        { header: 'Salon Name', accessor: 'name' },
        { header: 'Owner', accessor: 'ownerName' },
        { header: 'Location', accessor: 'location' },
        { header: 'Email', accessor: 'email' },
        {
            header: 'Actions',
            render: (salon) => (
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Button
                        variant="primary"
                        size="small"
                        onClick={() => onApprove(salon.id)}
                    >
                        Approve
                    </Button>
                    <Button
                        variant="danger"
                        size="small"
                        onClick={() => onReject(salon.id)}
                    >
                        Reject
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <div className="partner-approval-list">
            <Table
                columns={columns}
                data={salons}
                isLoading={isLoading}
                emptyMessage="No pending partner requests"
            />
        </div>
    );
};

export default PartnerApprovalList;
