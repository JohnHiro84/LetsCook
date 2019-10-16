import * as APIUtilDirections from '../util/directions_api_util';

export const RECEIVE_DIRECTIONS = "RECEIVE_DIRECTIONS";
export const RECEIVE_DIRECTION = "RECEIVE_DIRECTION";
export const REMOVE_DIRECTION = "REMOVE_DIRECTION";

export const receiveDirections = directions => ({
  type: RECEIVE_DIRECTIONS,
  directions
});

export const receiveDirection = direction => ({
  type: RECEIVE_DIRECTION,
  direction
});

export const removeDirection = direction => ({
  type: REMOVE_DIRECTION,
  direction
});


export const fetchDirections = (recipe_id) => dispatch => (
  APIUtilDirections.fetchDirections(recipe_id).then(directions => dispatch(receiveDirections(directions)))
);


export const createDirection = (recipe_id, direction) => dispatch => (
  APIUtilDirections.createDirection(recipe_id, direction)
  .then(direction => { dispatch(receiveDirection(direction))})
);


export const updateStep = step => dispatch => (
  APIUtilStep.updateStep(step)
  .then(step => dispatch(receiveStep(step)))
);


export const destroyDirection = direction => dispatch => (
  APIUtilDirections.deleteDirection(direction)
  .then(direction => dispatch(removeDirection(direction)))
);
