import { connect } from 'react-redux';
import CommentList from './comment_list';
// Actions
import { commentsByRecipeId } from '../../reducers/selectors';

import { receiveComment, createComment } from '../../actions/comment_actions';

const mapStateToProps = (state, { recipe_id }) => {
    let session_username = state.entities.users[state.session.id].username;

    return {
      session_username,
      comments: commentsByRecipeId(state, recipe_id),
      recipe_id
    }
};

const mapDispatchToProps = dispatch => ({
  receiveComment: comment => dispatch(receiveComment(comment)),
  createComment: (recipe_id, comment ) => dispatch(createComment(recipe_id, comment ))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
