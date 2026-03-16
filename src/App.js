import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Setting from './components/Setting/Setting';
import Week from './components/Trackerboard/Week/Week';
import Month from './components/Trackerboard/Month/Month';
import Year from './components/Trackerboard/Year/Year';
import Trends from './components/Trends/Trends';
import Performance from './components/Performance/Performance';

function App() {
  return (
    <Router>
      <div className="upper-container">
        <Setting className="setting">
          <div className="route-container">
            <Routes>
              <Route path="/week" element={<Week />} />
              <Route path="/month" element={<Month />} />
              <Route path="/year" element={<Year />} />
            </Routes>
          </div>
        </Setting>
        <Trends className="trends" />
        <Performance className="performance" />
      </div>
      <div className="lower-container">
        this is for the lower container
      </div>
    </Router>
  );
}

export default App;
