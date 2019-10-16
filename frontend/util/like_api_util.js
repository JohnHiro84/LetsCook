
export const fetchLikes = (recipe_id) => {
  let thepromise = $.ajax({
    method: 'GET',
    url: `/api/recipes/${recipe_id}/likes`
  })
  return thepromise;
};


export const createLike = (recipe_id, like) => {
  let apromise = $.ajax({
    url: `/api/recipes/${recipe_id}/likes`,
    type: 'POST',
    data: {like}
  });
  return apromise;
}


export const deleteLike = (like) => {
  let apromise = $.ajax({
    url: `/api/likes/${like.id}`,
    type: 'DELETE'

  });
  return apromise;
}
