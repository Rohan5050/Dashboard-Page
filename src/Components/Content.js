import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, resetGrid } from './gridSlice';
import { FiRefreshCw } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoClockFill } from "react-icons/go";
import { RiArrowDownSLine } from "react-icons/ri";

// ToggleButton Component
const ToggleButton = ({ isOpen, onToggle }) => {
  return (
    <button id='stylebtn' onClick={onToggle}>
      {isOpen ? 'Close Window' : '+ Add Widget'}
    </button>
  );
};

const Content = () => {
  const [isHalfWindowOpen, setIsHalfWindowOpen] = useState(false);
  const [selectedWidget, setSelectedWidget] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(0);

  const dispatch = useDispatch();
  const gridItems = useSelector((state) => state.grid.gridItems);

  const toggleHalfWindow = () => {
    setIsHalfWindowOpen(!isHalfWindowOpen);
  };

  const handleAddWidget = (widgetType) => {
    setSelectedWidget(widgetType);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setSelectedWidget({ type: 'image', src: base64String, alt: file.name });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfirmAdd = () => {
    if (selectedWidget) {
      dispatch(addItem({ position: selectedPosition, item: selectedWidget }));
    }
    toggleHalfWindow();
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  const handleResetGrid = () => {
    dispatch(resetGrid()); // Dispatch the reset action
  };

  return (
    <>
      <div className='btn-aln-1'>
        <ToggleButton isOpen={isHalfWindowOpen} onToggle={toggleHalfWindow} />
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
            {item?.type === 'widget' && <div className="widget">xyz</div>}
            {item?.type === 'image' && (
              <div>
                <img src={item.src} alt={item.alt} />
                <button className='btn-aln-4' onClick={() => handleRemoveItem(index)}>Remove</button>
              </div>
            )}
            {!item && <div id='box1-txt'><b>Empty Slot</b></div>}
          </div>
        ))}
      </div>

      <h5 className='hd3-aln'>CWPP Dashboard:</h5>

      <div id='d-flex-2' className='grid-container'>
        {gridItems.slice(3).map((item, index) => (
          <div key={index} className="grid-item">
            {item?.type === 'widget' && <div className="widget"></div>}
            {item?.type === 'image' && (
              <div>
                <img src={item.src} alt={item.alt} />
                <button className='btn-aln-4' onClick={() => handleRemoveItem(index + 3)}>Remove</button>
              </div>
            )}
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
            <ul>
              <li>
                <button onClick={() => handleAddWidget('widget')}>Add Content</button>
              </li>
              <li>
                <button>
                  <label htmlFor="image-upload">Add Widget</label>
                  <input 
                    type="file" 
                    id="image-upload" 
                    style={{ display: 'none' }} 
                    onChange={handleImageUpload}
                  />
                </button>
              </li>
              <li><button onClick={handleResetGrid}>Reset Grid</button> {/* Add reset button */}</li>
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


