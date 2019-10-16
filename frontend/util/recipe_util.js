export const fetchAllRecipes = () => {
 let recipe_promise = $.ajax({
    method: 'GET',
    url: `/api/recipes/`
  })
  return recipe_promise;
};

export const fetchSingleRecipe = (recipeId) => {
 let recipe_promise = $.ajax({
    method: 'GET',
    url: `/api/recipes/${recipeId}`
  })
  return recipe_promise;
};


export const createRecipeUtil = (recipe) => {

 let recipe_promise = $.ajax({
    method: 'POST',
    url: `/api/recipes/`,
    data: { recipe }
  })
  return recipe_promise;
};


export const deleteRecipe = (recipe) => {
  let apromise = $.ajax({
    method: 'DELETE',
    url: `/api/recipes/${recipe.id}`,
    data: { recipe }
  });
  return apromise;
}


export const updateRecipe = (recipe) => {
  console.log(recipe);
  let apromise = $.ajax({
    method: 'PATCH',
    url: `/api/recipes/${recipe.id}`,
    data: { recipe }
  });
  return apromise;
}
