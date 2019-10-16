
export const fetchIngredients = (recipe_id) => {
  let thepromise = $.ajax({
    method: 'GET',
    url: `/api/recipes/${recipe_id}/ingredients`
  })
  return thepromise;
};


export const createIngredient = (recipe_id, ingredient) => {
  let apromise = $.ajax({
    url: `/api/recipes/${recipe_id}/ingredients`,
    type: 'POST',
    data: {ingredient}
  });
  return apromise;
}

export const deleteIngredient = (ingredient) => {
  let apromise = $.ajax({
    url: `/api/ingredients/${ingredient.id}`,
    type: 'DELETE'

  });
  return apromise;
}
