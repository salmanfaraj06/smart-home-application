import React from 'react';
import './Settings.css';

function Settings() {
  return (
    <div className="settings">
      <h1>Settings</h1>
      <div className="settings-card">
        <h2>Smart Home Configuration</h2>
        <div className="settings-item">
          <label htmlFor="temperature">Default Room Temperature:</label>
          <input type="number" id="temperature" name="temperature" min="15" max="30" />
        </div>
        <div className="settings-item">
          <label htmlFor="lights">Default Lights Status:</label>
          <select id="lights" name="lights">
            <option value="on">On</option>
            <option value="off">Off</option>
          </select>
        </div>
        <div className="settings-item">
          <label htmlFor="alarm">Default Alarm Status:</label>
          <select id="alarm" name="alarm">
            <option value="on">On</option>
            <option value="off">Off</option>
          </select>
        </div>
        <div className="settings-item">
          <label htmlFor="lock">Default Door Lock Status:</label>
          <select id="lock" name="lock">
            <option value="locked">Locked</option>
            <option value="unlocked">Unlocked</option>
          </select>
        </div>
        <button className="settings-button">Save Changes</button>
      </div>
    </div>
  );
}

export default Settings;