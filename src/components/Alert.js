import React, { useEffect } from 'react';

const Alert = ({ message, showAlert, setAlert, color }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert({ showAlert: false });
        }, 3000);
        return () => clearTimeout(timeout);
    });
    return (
        <div className={`alert alert-${color}`}>
            <h4>{message}</h4>
        </div>
    );
};

export default Alert;
