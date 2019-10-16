import { connect } from 'react-redux';

import RecipeForm from './recipe_form';
import { createRecipe } from '../../actions/recipe_actions';

const mapStateToProps = ({ session, errors, entities }) => ({
  errors: errors.recipeErrors,
  session_username : entities.users[session.id].username

});

const mapDispatchToProps = dispatch => ({
  createRecipe: recipe => dispatch(createRecipe(recipe))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeForm);
