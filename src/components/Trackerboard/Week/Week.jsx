import React from 'react';
import './week.css';

const Week = () => {
  return (
    <div className="week-container">
      <div className="day-card">
        <div className="day-header">
          <div className="day-name">Monday</div>
          <div className="day-date">2025-03-17</div>
        </div>
        <div className="habit-list">
          <div className="habit-item">
            <span className="habit-text">Morning exercise</span>
            <input type="checkbox" className="habit-checkbox" />
          </div>
          <div className="habit-item">
            <span className="habit-text">Read 30 mins</span>
            <input type="checkbox" className="habit-checkbox" />
          </div>
          <div className="habit-item">
            <span className="habit-text">Drink 2L water</span>
            <input type="checkbox" className="habit-checkbox" />
          </div>
        </div>
        <div className="day-footer">
          <span className="completed-count">0/3</span> completed
        </div>
      </div>
      
      <div className="day-card">
        <div className="day-header">
          <div className="day-name">Tuesday</div>
          <div className="day-date">2025-03-18</div>
        </div>
        <div className="habit-list">
          <div className="habit-item">
            <span className="habit-text">Meditate 10 mins</span>
            <input type="checkbox" className="habit-checkbox" />
          </div>
          <div className="habit-item">
            <span className="habit-text">Write journal</span>
            <input type="checkbox" className="habit-checkbox" />
          </div>
          <div className="habit-item">
            <span className="habit-text">Walk 5000 steps</span>
            <input type="checkbox" className="habit-checkbox" />
          </div>
        </div>
        <div className="day-footer">
          <span className="completed-count">0/3</span> completed
        </div>
      </div>

      <div className="day-card">
        <div className="day-header">
          <div className="day-name">Wednesday</div>
          <div className="day-date">2025-03-19</div>
        </div>
        <div className="habit-list">
          <div className="habit-item">
            <span className="habit-text">Yoga</span>
            <input type="checkbox" className="habit-checkbox" />
          </div>
          <div className="habit-item">
            <span className="habit-text">Study coding</span>
            <input type="checkbox" className="habit-checkbox" />
          </div>
          <div className="habit-item">
            <span className="habit-text">Eat healthy</span>
            <input type="checkbox" className="habit-checkbox" />
          </div>
        </div>
        <div className="day-footer">
          <span className="completed-count">0/3</span> completed
        </div>
      </div>

      <div className="day-card">
        <div className="day-header">
          <div className="day-name">Thursday</div>
          <div className="day-date">2025-03-20</div>
        </div>
        <div className="habit-list">
          <div className="habit-item">
            <span className="habit-text">Morning run</span>
            <input type="checkbox" className="habit-checkbox" />
          </div>
          <div className="habit-item">
            <span className="habit-text">Call family</span>
            <input type="checkbox" className="habit-checkbox" />
          </div>
          <div className="habit-item">
            <span className="habit-text">Plan tomorrow</span>
            <input type="checkbox" className="habit-checkbox" />
          </div>
        </div>
        <div className="day-footer">
          <span className="completed-count">0/3</span> completed
        </div>
      </div>

      <div className="day-card">
        <div className="day-header">
          <div className="day-name">Friday</div>
          <div className="day-date">2025-03-21</div>
        </div>
        <div className="habit-list">
          <div className="habit-item">
            <span className="habit-text">Finish project</span>
            <input type="checkbox" className="habit-checkbox" />
          </div>
          <div className="habit-item">
            <span className="habit-text">Grocery shopping</span>
            <input type="checkbox" className="habit-checkbox" />
          </div>
          <div className="habit-item">
            <span className="habit-text">Relax 1 hour</span>
            <input type="checkbox" className="habit-checkbox" />
          </div>
        </div>
        <div className="day-footer">
          <span className="completed-count">0/3</span> completed
        </div>
      </div>

      <div className="day-card">
        <div className="day-header">
          <div className="day-name">Saturday</div>
          <div className="day-date">2025-03-22</div>
        </div>
        <div className="habit-list">
          <div className="habit-item">
            <span className="habit-text">Weekend hike</span>
            <input type="checkbox" className="habit-checkbox" />
          </div>
          <div className="habit-item">
            <span className="habit-text">Cook a meal</span>
            <input type="checkbox" className="habit-checkbox" />
          </div>
          <div className="habit-item">
            <span className="habit-text">Read a book</span>
            <input type="checkbox" className="habit-checkbox" />
          </div>
        </div>
        <div className="day-footer">
          <span className="completed-count">0/3</span> completed
        </div>
      </div>

      <div className="day-card">
        <div className="day-header">
          <div className="day-name">Sunday</div>
          <div className="day-date">2025-03-23</div>
        </div>
        <div className="habit-list">
          <div className="habit-item">
            <span className="habit-text">Rest day</span>
            <input type="checkbox" className="habit-checkbox" />
          </div>
          <div className="habit-item">
            <span className="habit-text">Plan next week</span>
            <input type="checkbox" className="habit-checkbox" />
          </div>
          <div className="habit-item">
            <span className="habit-text">Self-care</span>
            <input type="checkbox" className="habit-checkbox" />
          </div>
        </div>
        <div className="day-footer">
          <span className="completed-count">0/3</span> completed
        </div>
      </div>
    </div>
  );
};

export default Week;