import React from 'react';
import {Link} from 'react-router-dom';
import './setting.css';

const Setting = () => {
  return (
    <div className="setting-container">
        <div className="setting-header">
            <div className="date-range">
                <button className="arrow-btn arrow-left"></button>
                <div className="date-display">
                    <span className="month">MAR 9</span>
                    <span className="date"> - MAR 15,</span>
                    <span className="year">2026</span>
                </div>
                <button className="arrow-btn arrow-right"></button>
            </div>
            <div className="btn-range">
                <button className="setting-btn">⚙️</button>
            </div>
        </div>

        <div className="navbar">
            <Link to="/week">WEEK</Link>
            <Link to="/month">MONTH</Link>
            <Link to="/year">YEAR</Link>
        </div>

        <div className="setting-footer">
            <button className="habit-manage-btn">MY HABITS 6 MANAGE HABITS </button>
            <button className="streak-count-btn">CURRENT STREAK 0</button>
        </div>
    </div>
  );
};

export default Setting;