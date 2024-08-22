import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget, removeWidget } from './store';

const Drawer = ({ gridId }) => {
  const dispatch = useDispatch();
  const widgets = useSelector((state) => state.widgets[gridId]);

  const handleAddWidget = (widget) => {
    dispatch(addWidget({ gridId, widget }));
  };

  const handleRemoveWidget = (widget) => {
    dispatch(removeWidget({ gridId, widget }));
  };

  return (
    <div className="drawer">
      <h3>Manage Widgets</h3>
      <div className="widget-options">
        {['Widget 1', 'Widget 2', 'Widget 3'].map((widget) => (
          <div key={widget} className="widget-option">
            <input
              type="checkbox"
              checked={widgets.includes(widget)}
              onChange={(e) =>
                e.target.checked
                  ? handleAddWidget(widget)
                  : handleRemoveWidget(widget)
              }
            />
            <label>{widget}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drawer;
