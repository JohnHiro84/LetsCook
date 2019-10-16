
export const fetchDirections = (recipe_id) => {
  let thepromise = $.ajax({
    method: 'GET',
    url: `/api/recipes/${recipe_id}/directions`
  })
  return thepromise;
};


export const createDirection = (recipe_id, direction) => {
  let apromise = $.ajax({
    url: `/api/recipes/${recipe_id}/directions`,
    type: 'POST',
    data: {direction}
  });
  return apromise;
}


export const deleteDirection = (direction) => {
  let apromise = $.ajax({
    url: `/api/directions/${direction.id}`,
    type: 'DELETE'

  });
  return apromise;
}
