export const ADD_WIDGET = 'ADD_WIDGET';
export const REMOVE_WIDGET = 'REMOVE_WIDGET';

export const addWidget = (section, widget) => ({
  type: ADD_WIDGET,
  payload: { section, widget }
});

export const removeWidget = (section, widgetId) => ({
  type: REMOVE_WIDGET,
  payload: { section, widgetId }
});

