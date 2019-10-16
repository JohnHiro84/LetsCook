import * as APIUtilIngredients from '../util/ingredients_api_util';

export const RECEIVE_INGREDIENTS = "RECEIVE_INGREDIENTS";
export const RECEIVE_INGREDIENT = "RECEIVE_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";

export const receiveIngredients = ingredients => ({
  type: RECEIVE_INGREDIENTS,
  ingredients
});

export const receiveIngredient = ingredient => ({
  type: RECEIVE_INGREDIENT,
  ingredient
});

export const removeIngredient = ingredient => ({
  type: REMOVE_INGREDIENT,
  ingredient
});


export const fetchIngredients = (recipe_id) => dispatch => (
  APIUtilIngredients.fetchIngredients(recipe_id).then(ingredients => dispatch(receiveIngredients(ingredients)))
);


export const createIngredient = (recipe_id, ingredient) => dispatch => (
  APIUtilIngredients.createIngredient(recipe_id, ingredient)
  .then(ingredient => { dispatch(receiveIngredient(ingredient))})
);


export const updateStep = step => dispatch => (
  APIUtilStep.updateStep(step)
  .then(step => dispatch(receiveStep(step)))
);


export const destroyIngredient = ingredient => dispatch => (
  APIUtilIngredients.deleteIngredient(ingredient)
  .then(ingredient => dispatch(removeIngredient(ingredient)))
);
