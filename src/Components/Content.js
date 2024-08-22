import React, { useState } from 'react';
import { FiRefreshCw } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoClockFill } from "react-icons/go";
import { RiArrowDownSLine } from "react-icons/ri";
import ButtonGroup from './ButtonGroup';

// ToggleButton Component
const ToggleButton = ({ isOpen, onToggle }) => {
  return (
    <div onClick={onToggle}>
      {isOpen ? 'Close Window' : '+ Add Widget'}
    </div>
  );
};

const Content = () => {
  const [isHalfWindowOpen, setIsHalfWindowOpen] = useState(false);
  const [gridItems, setGridItems] = useState(Array(9).fill(null)); // Array to hold the grid content
  const [selectedWidget, setSelectedWidget] = useState(null); // Tracks selected widget
  const [uploadedImages, setUploadedImages] = useState([]); // Track uploaded images
  const [selectedPosition, setSelectedPosition] = useState(0); // Position to place widget or image

  const toggleHalfWindow = () => {
    setIsHalfWindowOpen((prevState) => !prevState);
  };

  const handleAddWidget = (widgetType) => {
    setSelectedWidget({ type: 'widget' });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImages([...uploadedImages, { src: imageUrl, alt: file.name }]);
      setSelectedWidget({ type: 'image', src: imageUrl, alt: file.name });
    }
  };

  const handleConfirmAdd = () => {
    const updatedGridItems = [...gridItems];
    if (updatedGridItems[selectedPosition] === null) {
      updatedGridItems[selectedPosition] = selectedWidget;
      setGridItems(updatedGridItems);
    }
    toggleHalfWindow(); // Close the half window after adding
  };


  const randomHeadings = [
    "Cloud Accounts Overview",
    "Cloud Risk Assessment",
    "Top 5 Namespace Specific Alerts",
    "Top 5 Namespace Specific Alerts",
    "Workload Alerts",
    "Upcoming Events"
  ];

  return (
    <>
      <div className='btn-aln-1'>
        <button><ToggleButton isOpen={isHalfWindowOpen} onToggle={toggleHalfWindow} /> </button>
      </div>
      <button id="btn-aln-2">
        <FiRefreshCw />
      </button>
      <button id="btn-aln-2">
        <BsThreeDotsVertical />
      </button>
      <button className='btn-aln-3'>
        <GoClockFill />
        <b> | Last 2 Days </b>
        <RiArrowDownSLine />
      </button>

      <h4 className='hdalign'>CNAPP Dashboard</h4>
      <h5 className='hd2align'>CSPM Executive Dashboard</h5>

      <div id='d-flex' className='grid-container'>
        {gridItems.slice(0, 3).map((item, index) => (
          <div key={index} className="grid-item">
             <h6 className='hdgrid'>{randomHeadings[index]}</h6>
            {item?.type === 'widget' && <div className="widget">Widget Content</div>}
            {item?.type === 'image' && <img src={item.src} alt={item.alt} />}
            {!item && <div id='box1-txt'><b>Empty Slot</b></div>}
          </div>
        ))}
      </div>

      <h5 className='hd3-aln'>CWPP Dashboard:</h5>

      <div id='d-flex-2' className='grid-container'>
        {gridItems.slice(3).map((item, index) => (
          <div key={index} className="grid-item">
           <h6 className='hdgrid'>{randomHeadings[index + 3]}</h6>
            {item?.type === 'widget' && <div className="widget">Widget Content</div>}
            {item?.type === 'image' && <img src={item.src} alt={item.alt} />}
            {!item && <div id='box1-txt'><b>Empty Slot</b></div>}
          </div>
        ))}
      </div>


      {/* Half-window that appears when ToggleButton is clicked */}
      {isHalfWindowOpen && (
        <div className="half-window">
          <div className="half-window-header">
            <h3 className='txt5'>Add Widget</h3>
            <button onClick={toggleHalfWindow} className="close-button">X</button>
          </div>
          <div className="half-window-content">
            <p>Personalize your dashboard by adding the following widgets or images</p>
            <ButtonGroup/>
            <ul>
              <li>
                <button onClick={() => handleAddWidget('widget')}>Add Widget</button>
              </li>
              <li>
                <button>
                  <label htmlFor="image-upload">Add Image</label>
                  <input 
                    type="file" 
                    id="image-upload" 
                    style={{ display: 'none' }} 
                    onChange={handleImageUpload}
                  />
                </button>
              </li>
            </ul>

            <div className="position-select">
              <label htmlFor="position-select">Select Position:</label>
              <select 
                id="position-select" 
                value={selectedPosition} 
                onChange={(e) => setSelectedPosition(Number(e.target.value))}
              >
                {gridItems.map((_, index) => (
                  <option key={index} value={index}>
                    Position {index + 1} {gridItems[index] ? '(Occupied)' : '(Empty)'}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="half-window-footer">
            <button onClick={toggleHalfWindow} className="cancel-button">Cancel</button>
            <button onClick={handleConfirmAdd} className="confirm-button">Confirm</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Content;


