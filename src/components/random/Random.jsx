import React from 'react';
import { Link } from 'react-router-dom';

const Random = () => {
    return (
        <div className='flex flex-col items-center p-5'>
            <h1>Go to</h1>
            <div>
                <li>
                    <Link to={'/pricing'}>Pricing Page</Link>
                </li>
                <li>
                    <Link to={'/dashboard-stats'}>Dashboard Stats</Link>
                </li>
                <li>
                    <Link to={'/futuristic-dashboard'}>Dashboard Stats</Link>
                </li>
                <li>
                    <Link to={'/qc'}>Quantum Code</Link>
                </li>
            </div>
        </div>
    );
};

export default Random;