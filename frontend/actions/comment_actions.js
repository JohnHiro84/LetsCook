import * as APIUtilComments from '../util/comments_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});


export const fetchComments = (recipe_id) => dispatch => (
  APIUtilComments.fetchComments(recipe_id).then(comments => dispatch(receiveComments(comments)))
);


export const createComment = (recipe_id, comment) => dispatch => (
  APIUtilComments.createComment(recipe_id, comment)
  .then(comment => { dispatch(receiveComment(comment))})
);


export const updateStep = step => dispatch => (
  APIUtilStep.updateStep(step)
  .then(step => dispatch(receiveStep(step)))
);


export const destroyStep = step => dispatch => (
  APIUtilStep.deleteStep(step)
  .then(step => dispatch(removeStep(step)))
);
