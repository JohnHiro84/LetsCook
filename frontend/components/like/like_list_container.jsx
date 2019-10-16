import { connect } from 'react-redux';
import LikeList from './like_list';
import { likesByRecipeId } from '../../reducers/selectors';
import { receiveLike, createLike, destroyLike } from '../../actions/like_actions';

const mapStateToProps = (state, { recipe_id }) => {
    let session_id = state.session.id;

    return {
      session_id,
      likes: likesByRecipeId(state, recipe_id),
      recipe_id
    }
};

const mapDispatchToProps = dispatch => ({
  receiveLike: like => dispatch(receiveLike(like)),
  createLike: (recipe_id, like ) => dispatch(createLike(recipe_id, like )),
  destroyLike: like => dispatch(destroyLike(like))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeList);
