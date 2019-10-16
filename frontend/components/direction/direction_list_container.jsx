import { connect } from 'react-redux';
import DirectionList from './direction_list';

import { directionsByRecipeId } from '../../reducers/selectors';

import { receiveDirection, createDirection } from '../../actions/direction_actions';

const mapStateToProps = (state, { recipe_id }) => {
    let session_id = state.session.id;
    let user = state.entities.users[state.session.id].username;
    let author = state.entities.recipes.current_recipe.recipe.author;
    return {
      session_id,
      directions: directionsByRecipeId(state, recipe_id),
      recipe_id,
      user,
      author
    }
};

const mapDispatchToProps = dispatch => ({
  receiveDirection: direction => dispatch(receiveDirection(direction)),
  createDirection: (recipe_id, direction ) => dispatch(createDirection(recipe_id, direction ))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectionList);
