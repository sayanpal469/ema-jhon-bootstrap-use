import React from 'react';
import './Top.css'
import banner from '../../images/top-banner.png'

const TopSection = () => {
    return (
        <div className='top-container container'>
            <div className="row align-items-center">
            <div className='col-lg-6'>
                <small className='text-warning'>Sale up to 70% off</small>
                <h1>New Collection For Fall</h1>
                <p>Discover all the new arrivals of ready-to-wear collection.</p>
                <button className='btn btn-warning mt-3'>Shop Now</button>
            </div>
            <div className='col-lg-6'>
            <img className='w-75' src={banner} alt="" />
            </div>
            </div>
        </div>
    );
};

export default TopSection;