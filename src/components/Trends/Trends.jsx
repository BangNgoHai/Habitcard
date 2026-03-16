import React from 'react';
import './trends.css';

const Trends = () => {
  return (
    <div class="trends-container">
        <div className="header">
            <h1>📊 WEEKLY TRENDS</h1>
        </div>
        <div className="content">
            <div className="column-container">
                <span className="label">45%</span>
                <div className="column" style={{ height: '45%' }}></div>
                <span className="label">Mon</span>
            </div>
            <div className="column-container">
                <span className="label">45%</span>
                <div className="column" style={{ height: '45%' }}></div>
                <span className="label">Tue</span>
            </div>
            <div className="column-container">
                <span className="label">45%</span>
                <div className="column" style={{ height: '45%' }}></div>
                <span className="label">Wed</span>
            </div>
            <div className="column-container">
                <span className="label">45%</span>
                <div className="column" style={{ height: '45%' }}></div>
                <span className="label">Thu</span>
            </div>
            <div className="column-container">
                <span className="label">45%</span>
                <div className="column" style={{ height: '45%' }}></div>
                <span className="label">Fri</span>
            </div>
            <div className="column-container">
                <span className="label">45%</span>
                <div className="column" style={{ height: '45%' }}></div>
                <span className="label">Sat</span>
            </div>      
            <div className="column-container">
                <span className="label">45%</span>
                <div className="column" style={{ height: '45%' }}></div>
                <span className="label">Sun</span>
            </div>
        </div>
    </div>
  );
};

export default Trends;