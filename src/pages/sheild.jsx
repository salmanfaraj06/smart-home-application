import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faVideo, faBell } from '@fortawesome/free-solid-svg-icons';
import './Security.css';

function Security() {
  return (
    <div className="settings">
      <h1>Security Settings</h1>
      <div className="security-card">
        <h2>Security Configuration</h2>
        <div className="security-item">
         
          <label htmlFor="door-lock">Default Door Lock Status:</label>
          <select id="door-lock" name="door-lock">
            <option value="locked">Locked</option>
            <option value="unlocked">Unlocked</option>
          </select>
        </div>
        <div className="security-item">
          
          <label htmlFor="cctv">Default CCTV Status:</label>
          <select id="cctv" name="cctv">
            <option value="on">On</option>
            <option value="off">Off</option>
          </select>
        </div>
        <div className="security-item">
          
          <label htmlFor="alarm">Default Alarm Status:</label>
          <select id="alarm" name="alarm">
            <option value="on">On</option>
            <option value="off">Off</option>
          </select>
        </div>
        <button className="security-button">Save Changes</button>
      </div>
    </div>
  );
}

export default Security;