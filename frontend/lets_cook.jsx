//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
import { requestSingleRecipe, createRecipe, receiveSingleRecipe,
receiveRecipeErrors } from './actions/recipe_actions';
import { fetchIngredients} from './actions/ingredient_actions';

document.addEventListener('DOMContentLoaded', () => {

  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.requestSingleRecipe = requestSingleRecipe;
  //
  // window.receiveSingleRecipe = receiveSingleRecipe;
  // window.fetchIngredients = fetchIngredients;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
