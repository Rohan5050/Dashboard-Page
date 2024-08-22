import { ADD_WIDGET, REMOVE_WIDGET } from './actions';

const initialState = {
  sections: {
    section1: [],
    section2: [],
    // Add more sections as needed
  }
};

const widgetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        sections: {
          ...state.sections,
          [action.payload.section]: [
            ...state.sections[action.payload.section],
            action.payload.widget
          ]
        }
      };

    case REMOVE_WIDGET:
      return {
        ...state,
        sections: {
          ...state.sections,
          [action.payload.section]: state.sections[action.payload.section].filter(
            widget => widget.id !== action.payload.widgetId
          )
        }
      };

    default:
      return state;
  }
};

export default widgetsReducer;
