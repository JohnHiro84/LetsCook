import { uniqueId } from '../../util/id_generator'
import React from 'react';
import {UserlikedAllready} from '../../reducers/selectors';

class LikeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.user_id,
      recipe_id: this.props.recipe_id
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (UserlikedAllready(this.props.likes, this.props.user_id)){
      this.props.destroyLike(UserlikedAllready(this.props.likes, this.props.user_id));
    } else {
      const like = Object.assign({}, this.state, { id: uniqueId() });
      this.props.createLike(this.props.recipe_id, like)
    }

  }


  render() {
    let like_or_unlike = "like";
    if(this.props.likes){
      if(UserlikedAllready(this.props.likes, this.props.user_id)){
        like_or_unlike = "unlike";
      } else {
        like_or_unlike = "like";
      }
    }

    return (
      <div>
      <form className="like-form" onSubmit={ this.handleSubmit }>
        <button className="like-button-form">{like_or_unlike}</button>
      </form>

      </div>
    );
  }
}

export default LikeForm;
