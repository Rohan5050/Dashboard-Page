export const ADD_IMAGE = 'ADD_IMAGE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const addImage = (image, position) => ({
  type: ADD_IMAGE,
  payload: { image, position },
});

export const removeImage = (position) => ({
  type: REMOVE_IMAGE,
  payload: { position },
});

