import React from 'react';

import { withRouter } from 'react-router-dom';

class RecipeFormUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      image_url: '',
      tag_names: [],
      newTag: ""
    };
    this.updateMoves = this.updateMoves.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTag = this.addTag.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let array_keys = Object.keys(this.state);
    let output_object = {id: this.props.match.params.recipeId};

    if ( this.state["title"].length > 0){
      output_object["title"] = this.state["title"];
    }
    if ( this.state["description"].length > 0){
      output_object["description"] = this.state["description"];
    }
    if ( this.state["image_url"].length > 0){
      output_object["image_url"] = this.state["image_url"];
    }
    if ( this.state["tag_names"].length > 0){
      output_object["tag_names"] = this.state["tag_names"];
    }

    this.props.updateRecipe(output_object)
    .then(data => this.props.history.push(`/yourrecipes`));

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
        <h4>Make updates to your recipe!</h4>
        <ul>
          {this.errors()}
        </ul>
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
            <button className="add-tag-button" type="button" onClick={this.addTag}>Set New Tags</button>

            <ul className="tags-ul-tba">{tags}</ul>

          <button>Update Recipe</button>
        </form>
      </section>
    );
  }
}

export default withRouter(RecipeFormUpdate);
