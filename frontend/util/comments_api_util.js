
export const fetchComments = (recipe_id) => {
  let thepromise = $.ajax({
    method: 'GET',
    url: `/api/recipes/${recipe_id}/comments`
  })
  return thepromise;
};


export const createComment = (recipe_id, comment) => {
  let apromise = $.ajax({
    url: `/api/recipes/${recipe_id}/comments`,
    type: 'POST',
    data: {comment}
  });
  return apromise;
}
