import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <div align="center">
                <h1>404 Page Not Found</h1>
                <Link to='/'>Home</Link>
            </div>
        </div>
    );
};

export default NoMatch;