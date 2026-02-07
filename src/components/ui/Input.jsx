import React from 'react';
import './Input.css';

const Input = ({ label, type = 'text', value, onChange, placeholder, name, error, className = '' }) => {
    return (
        <div className={`ui-input-container ${className}`}>
            {label && <label className="ui-label">{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`ui-input ${error ? 'error' : ''}`}
            />
            {error && <span className="ui-error-message">{error}</span>}
        </div>
    );
};

export default Input;
