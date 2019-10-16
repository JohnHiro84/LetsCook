import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import recipeErrors from './recipe_errors_reducer';

export default combineReducers({
  session,
  recipeErrors
});
