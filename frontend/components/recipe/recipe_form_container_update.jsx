import { connect } from 'react-redux';

import RecipeFormUpdate from './recipe_form_update';
import { updateRecipe, requestSingleRecipe } from '../../actions/recipe_actions';

const mapStateToProps = ({ session, errors, entities }) => ({
  errors: errors.recipeErrors,
  session_username : entities.users[session.id].username

});

const mapDispatchToProps = dispatch => ({
  updateRecipe: recipe => dispatch(updateRecipe(recipe))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeFormUpdate);
