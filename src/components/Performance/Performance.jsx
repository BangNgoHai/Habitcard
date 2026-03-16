import React from 'react';
import './performance.css'; 

const Performance = () => {
  return (
    <div className="performance-container">
      <div className="performance-header">
        WEEKLY SUCCESS
      </div>
      <div className="performance-content">
        <div className="completed-habits">
          <span>Completed Habits</span>
          <span className="number">0/20</span>
        </div>
        <div className="success-rate">
          <span>0%</span>
        </div>
      </div>
      <div className="performance-footer">
        <div className="title"> your performance this week</div>
        <div>You logged 0 completions this week. Keep the floor low and focus on restart consistency.</div>
      </div>
    </div>
  );
};

export default Performance;