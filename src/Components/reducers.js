import { ADD_IMAGE, REMOVE_IMAGE } from './actions';

const initialState = {
  gridItems: Array(6).fill(null),
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGE:
      const newGridItems = [...state.gridItems];
      newGridItems[action.payload.position] = action.payload.image;
      return {
        ...state,
        gridItems: newGridItems,
      };
    case REMOVE_IMAGE:
      const updatedGridItems = [...state.gridItems];
      updatedGridItems[action.payload.position] = null;
      return {
        ...state,
        gridItems: updatedGridItems,
      };
    default:
      return state;
  }
};

export default rootReducer;
