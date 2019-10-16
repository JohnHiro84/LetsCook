import merge from 'lodash/merge';

import { RECEIVE_SINGLE_RECIPE } from '../actions/recipe_actions';
import { RECEIVE_DIRECTIONS,
  RECEIVE_DIRECTION,
  REMOVE_DIRECTION } from '../actions/direction_actions';

const directionsReducer = (state = {}, action) => {
  Object.freeze(state);

  let directions;
  let newState;
  switch (action.type) {

    default:
      return state;
  }
};

export default directionsReducer;
