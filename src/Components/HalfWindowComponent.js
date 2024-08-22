import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from './actions';

const HalfWindowComponent = ({ closeWindow }) => {
  const [selectedSection, setSelectedSection] = useState('section1');
  const [widgetName, setWidgetName] = useState('');
  const dispatch = useDispatch();

  const handleAddWidget = () => {
    if (widgetName.trim()) {
      const newWidget = {
        id: Date.now(), // Simple unique ID
        name: widgetName
      };
      dispatch(addWidget(selectedSection, newWidget));
      setWidgetName(''); // Reset widget name
    }
  };

  return (
    <div className="half-window">
      <div className="half-window-header">
        <h3>Add Widget</h3>
        <button onClick={closeWindow} className="close-button">X</button>
      </div>
      <div className="half-window-content">
        <label htmlFor="sectionSelect">Select Section:</label>
        <select 
          id="sectionSelect" 
          value={selectedSection} 
          onChange={(e) => setSelectedSection(e.target.value)}
        >
          <option value="section1">Section 1</option>
          <option value="section2">Section 2</option>
          {/* Add more options for sections as needed */}
        </select>

        <input 
          type="text" 
          placeholder="Widget Name" 
          value={widgetName} 
          onChange={(e) => setWidgetName(e.target.value)} 
        />

        <button onClick={handleAddWidget}>Add Widget</button>
      </div>
    </div>
  );
};

export default HalfWindowComponent;
