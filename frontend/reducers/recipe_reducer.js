import merge from 'lodash/merge';

import {
  RECEIVE_ALL_RECIPES,
  RECEIVE_SINGLE_RECIPE,
  REMOVE_RECIPE

} from '../actions/recipe_actions';
import { RECEIVE_INGREDIENT, REMOVE_INGREDIENT } from '../actions/ingredient_actions';
import { RECEIVE_DIRECTION, REMOVE_DIRECTION } from '../actions/direction_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';

import { RECEIVE_COMMENT} from '../actions/comment_actions';
const recipeReducer = (state = {}, action) => {
  Object.freeze(state);

  let recipe_now;
  let nextState;
  let packaged;
  let new_obj;
  switch (action.type) {
    case RECEIVE_ALL_RECIPES:
          return merge({}, state, action.recipes);

    case RECEIVE_SINGLE_RECIPE:
      recipe_now = action.recipe;
      return merge({}, state, { "current_recipe": recipe_now });

    case REMOVE_RECIPE:
      nextState = merge({}, state);
      delete nextState["current_recipe"];
      delete nextState[action.recipe.id];
      return nextState;

    case RECEIVE_INGREDIENT:
      nextState = merge({}, state);
      let ingredient_new = action.ingredient;
      packaged = { [ingredient_new.id] : ingredient_new};
      new_obj = { current_recipe: { ingredients: packaged}};
      return merge({}, state, new_obj );

    case REMOVE_INGREDIENT:
      nextState = merge({}, state);
      delete nextState["current_recipe"]["ingredients"][action.ingredient.id];
      return nextState;

    case RECEIVE_DIRECTION:
      nextState = merge({}, state);
      let direction_new = action.direction;
      packaged = { [direction_new.id] : direction_new};
      new_obj = { current_recipe: { directions: packaged}};
      return merge({}, state, new_obj );

    case REMOVE_DIRECTION:
      nextState = merge({}, state);
      delete nextState["current_recipe"]["directions"][action.direction.id];
      return nextState;

    case RECEIVE_COMMENT:
      nextState = merge({}, state);
      let comment_new = action.comment;
      packaged = { [comment_new.id] : comment_new};
      new_obj = { current_recipe: { comments: packaged}};
      return merge({}, state, new_obj );

    case RECEIVE_LIKE:
      nextState = merge({}, state);
      let like_new = action.like;
      packaged = { [like_new.id] : like_new};
      new_obj = { current_recipe: { likes: packaged}};
      return merge({}, state, new_obj );

    case REMOVE_LIKE:
      nextState = merge({}, state);
      delete nextState["current_recipe"]["likes"][action.like.id];
      return nextState;

    default:
      return state;
  }
};

export default recipeReducer;
