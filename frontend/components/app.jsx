import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SearchContainer from './search/search_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import RecipeIndexContainer from './recipe/recipe_index_container';
import RecipeIndexContainerYours from './recipe/recipe_index_container_yours';

import RecipeDetailContainer from './recipe/recipe_detail_container';
import RecipeFormContainer from './recipe/recipe_form_container';

const App = () => (
  <div>
    <header>

      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />



       <ProtectedRoute exact path="/search" component={SearchContainer} />

       <ProtectedRoute exact path="/" component={RecipeIndexContainer} />
       <ProtectedRoute exact path="/yourrecipes" component={RecipeIndexContainerYours} />

       <ProtectedRoute path="/api/recipes/:recipeId" component= {RecipeDetailContainer} />
       <ProtectedRoute exact path="/newrecipe" component={RecipeFormContainer} />
    </Switch>


  </div>
);

export default App;
