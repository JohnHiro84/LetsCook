import merge from 'lodash/merge';

import { RECEIVE_SINGLE_RECIPE } from '../actions/recipe_actions';
import { RECEIVE_INGREDIENTS, RECEIVE_INGREDIENT, REMOVE_INGREDIENT } from '../actions/ingredient_actions';

const ingredientsReducer = (state = {}, action) => {
  Object.freeze(state);

  let the_ingredients;
  let newState;
  switch (action.type) {

    default:
      return state;
  }
};

export default ingredientsReducer;
