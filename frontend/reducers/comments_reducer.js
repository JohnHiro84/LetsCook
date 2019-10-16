import merge from 'lodash/merge';

import { RECEIVE_SINGLE_RECIPE } from '../actions/recipe_actions';
import { RECEIVE_COMMENTS, RECEIVE_COMMENT } from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);

  let comments;
  let newState;
  switch (action.type) {

    default:
      return state;
  }
};

export default commentsReducer;
