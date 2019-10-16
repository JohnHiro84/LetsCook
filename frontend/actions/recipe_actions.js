import * as RecipeAPIUtil from '../util/recipe_util';
//
export const RECEIVE_ALL_RECIPES = "RECEIVE_ALL_RECIPES";
export const RECEIVE_SINGLE_RECIPE = "RECEIVE_SINGLE_RECIPE";
export const RECEIVE_RECIPE_ERRORS = "RECEIVE_RECIPE_ERRORS";
export const REMOVE_RECIPE = 'REMOVE_RECIPE';



// export const CREATE_POKEMON = 'CREATE_POKEMON';
// export const START_LOADING_ALL_POKEMON = 'START_LOADING_ALL_POKEMON';
// export const START_LOADING_SINGLE_POKEMON = 'START_LOADING_SINGLE_POKEMON';
//
export const receiveAllRecipes = recipes => ({
  type: RECEIVE_ALL_RECIPES,
  recipes
});

export const receiveSingleRecipe = recipe => ({
  type: RECEIVE_SINGLE_RECIPE,
  recipe
});
//
export const receiveRecipeErrors = errors => ({
  type: RECEIVE_RECIPE_ERRORS,
  errors
});
//
//
export const removeRecipe = recipe => ({
  type: REMOVE_RECIPE,
  recipe
});

export const requestAllRecipes = () => (dispatch) => {
  return RecipeAPIUtil.fetchAllRecipes()
    .then(recipes => {dispatch(receiveAllRecipes(recipes))});
}


export const requestSingleRecipe = (id) => (dispatch) => {

  return RecipeAPIUtil.fetchSingleRecipe(id).then(recipe => {
    dispatch(receiveSingleRecipe(recipe));
    return recipe;
  });
}



export const createRecipe = (recipe) => (dispatch) => (
  RecipeAPIUtil.createRecipeUtil(recipe)
    .then(recipe => { dispatch(receiveSingleRecipe(recipe));
    return recipe;
  }).fail(err => dispatch(receiveRecipeErrors(err.response.JSON)))
);


export const destroyRecipe = recipe => dispatch => (
  RecipeAPIUtil.deleteRecipe(recipe)
  .then(recipe => dispatch(removeRecipe(recipe)))
);


export const updateRecipe = recipe => dispatch => (
  RecipeAPIUtil.updateRecipe(recipe)
  // .then(recipe => dispatch(receiveSingleRecipe(recipe)))
);
