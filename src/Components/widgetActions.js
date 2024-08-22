// actions/widgetActions.js
export const addWidget = (widget) => ({
    type: 'ADD_WIDGET',
    payload: widget,
  });
  
  export const removeWidget = (widget) => ({
    type: 'REMOVE_WIDGET',
    payload: widget,
  });
  