import * as APIUtilLikes from '../util/like_api_util';

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const receiveLikes = likes => ({
  type: RECEIVE_LIKES,
  likes
});

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});


export const fetchLikes = (recipe_id) => dispatch => (
  APIUtilLikes.fetchLikes(recipe_id).then(likes => dispatch(receiveLikes(likes)))
);

export const createLike = (recipe_id, like) => dispatch => (
  APIUtilLikes.createLike(recipe_id, like)
  .then(like => { dispatch(receiveLike(like))})
);

export const destroyLike = like => dispatch => (
  APIUtilLikes.deleteLike(like)
  .then(like => dispatch(removeLike(like)))
);



export const updateStep = step => dispatch => (
  APIUtilStep.updateStep(step)
  .then(step => dispatch(receiveStep(step)))
);


export const destroyIngredient = ingredient => dispatch => (
  APIUtilIngredients.deleteIngredient(ingredient)
  .then(ingredient => dispatch(removeIngredient(ingredient)))
);
