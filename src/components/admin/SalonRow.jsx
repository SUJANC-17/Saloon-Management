import React from 'react';
import Button from '../ui/Button';

const SalonRow = ({ salon, onApprove, onReject, showActions = true }) => {
    return (
        <tr>
            <td>{salon.name}</td>
            <td>{salon.ownerName}</td>
            <td>{salon.location}</td>
            <td>{salon.email}</td>
            {showActions && (
                <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <Button variant="primary" size="small" onClick={() => onApprove(salon.id)}>Approve</Button>
                        <Button variant="danger" size="small" onClick={() => onReject(salon.id)}>Reject</Button>
                    </div>
                </td>
            )}
        </tr>
    );
};

export default SalonRow;
