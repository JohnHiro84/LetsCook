import React from 'react';

import { withRouter } from 'react-router-dom';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desciption: '',
      image_url: '',
      author: this.props.session_username,
      tag_names: [],
      newTag: ""
    };
    this.updateMoves = this.updateMoves.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTag = this.addTag.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log(this.state);
    this.props.createRecipe(this.state)
    .then(data => this.props.history.push(`/api/recipes/${data.recipe.id}`));
    this.setState({title: '', description: '', newTag: "", tag_names: []});
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  addTag(e) {
  if(this.state.newTag.length > 0){
    this.setState({
      tag_names: [ ...this.state.tag_names, this.state.newTag ],
      newTag: ""
    });
  }
  }

  updateMoves(e) {
    this.setState({
      moves: Object.assign(
        {},
        this.state.moves,
        { [e.target.id]: e.target.value }
      )
    });
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }

  render() {
    const { session_username } = this.props;
    const tags = this.state.tag_names.map(tag => (
        <li className="tags-li-tba" key={`todo-list-item${tag}`} >{tag}</li>
      )
    );
    return (
      <section className="recipe-detail">


        <form className="recipe-form" onSubmit={this.handleSubmit}>

            <input
              type="text"
              value={this.state.title}
              placeholder="title"
              onChange={this.update('title')}
            />
            <input
              type="text"
              value={this.state.description}
              placeholder="description"
              onChange={this.update('description')}
            />
            <input
              type="text"
              value={this.state.image_url}
              placeholder="image Url"
              onChange={this.update('image_url')}
            />
            <label>Tags:</label>
              <input
                className="input"
                ref="tag_names"
                cols='20'
                value={this.state.newTag}
                rows='5'
                placeholder="add a tag!"
                onChange = {this.update("newTag")}
                ></input>
            <button className="add-tag-button" type="button" onClick={this.addTag}>Add Tag</button>


            <ul className="recipe-tags">{tags}</ul>

          <button>Create Recipe</button>
        </form>
        <ul>
          {this.errors()}
        </ul>
      </section>
    );
  }
}

export default withRouter(RecipeForm);
