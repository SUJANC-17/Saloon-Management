import React from 'react';
import Button from '../ui/Button';

const UserRow = ({ user, onEdit, onDeactivate }) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                <span className={`role-badge ${user.role.toLowerCase()}`}>
                    {user.role}
                </span>
            </td>
            <td>{user.joinedDate}</td>
            <td>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Button variant="secondary" size="small" onClick={() => onEdit(user)}>Edit</Button>
                    <Button variant="danger" size="small" onClick={() => onDeactivate(user.id)}>Deactivate</Button>
                </div>
            </td>
            <style>{`
        .role-badge {
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .role-badge.user { background-color: #e0f2fe; color: #0369a1; }
        .role-badge.owner { background-color: #fef3c7; color: #92400e; }
        .role-badge.admin { background-color: #fee2e2; color: #991b1b; }
      `}</style>
        </tr>
    );
};

export default UserRow;
