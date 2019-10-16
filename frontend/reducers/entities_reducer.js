import { combineReducers } from 'redux';

import users from './users_reducer';
import recipes from './recipe_reducer';


export default combineReducers({
  recipes,

  users

});
