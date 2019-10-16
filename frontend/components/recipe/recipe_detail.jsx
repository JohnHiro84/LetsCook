import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import IngredientListContainer from '../ingredient/ingredient_list_container';
import IngredientForm from '../ingredient/ingredient_form';

import DirectionListContainer from '../direction/direction_list_container';
import DirectionForm from '../direction/direction_form';

import CommentListContainer from '../comment/comment_list_container';
import CommentForm from '../comment/comment_form';

import LikeListContainer from '../like/like_list_container';
import LikeForm from '../like/like_form';

import RecipeFormContainerUpdate from './recipe_form_container_update';

class RecipeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: { recipe: {title: "",
                         description: "",
                         image_url: "",
                          author: "" }


      }
    };
    this.deleteTheRecipe = this.deleteTheRecipe.bind(this);

  }

  componentDidMount() {

    this.props.requestSingleRecipe(this.props.match.params.recipeId)
    .then(res => this.setState({ 'recipe': res }));

  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.recipeId !== this.props.match.params.recipeId) {
      this.props.requestSingleRecipe(this.props.match.params.recipeId).then(res => this.setState({ 'recipe': res }));
    }
  }

  deleteTheRecipe(e) {
    e.preventDefault();
    this.props.destroyRecipe(this.state.recipe.recipe);
    this.props.history.push(`/`);
  }

  render() {
    const { session_username, destroyRecipe } = this.props;

    let theDirections, theIngredients, theTags, theLikes;
    let arr_ingredients = [{id: 1, description: "default", recipe_id: 1}];
    let arr_directions = [{id: 1, description: "default", recipe_id: 1}];
    let array_tags = [{id: 1, name: "default"}];
    let array_comments = [{id: 1, body: "default", author: "redwood"}];
    let array_likes = [{id: undefined, recipe_id: 1, user_id: 1}];
    let ingredient_list_or_form;
    let direction_list_or_form;
    let comment_list_or_form;
    let like_list_or_form;

    if(this.state.recipe.directions){
      arr_directions = Object.keys(this.state.recipe.directions).map(key => this.state.recipe.directions[key]);
    }

    if(this.state.recipe.ingredients){
      arr_ingredients = Object.keys(this.state.recipe.ingredients).map(key => this.state.recipe.ingredients[key]);
    }

    if(this.state.recipe.comments){
      array_comments = Object.keys(this.state.recipe.comments).map(key => this.state.recipe.comments[key]);
    }

    if(this.state.recipe.likes){
      array_likes = Object.keys(this.state.recipe.likes).map(key => this.state.recipe.likes[key]);
    }

    if(this.state.recipe.tags){
      array_tags = Object.keys(this.state.recipe.tags).map(key => this.state.recipe.tags[key]);

      theTags = array_tags.map(tag => (
         <li key={tag.id}>{tag.name} </li >
        )
      )
    }

  if(arr_ingredients[0].description !== "default"){
    ingredient_list_or_form = ( <IngredientListContainer recipe_id={ this.props.match.params.recipeId } />);
  } else {
    ingredient_list_or_form =( <IngredientForm recipe_id={ this.props.match.params.recipeId } createIngredient={ this.props.createIngredient } />);
  }

  if(arr_directions[0].description !== "default"){
    direction_list_or_form = ( <DirectionListContainer recipe_id={ this.props.match.params.recipeId } />);
  } else {
    direction_list_or_form =( <DirectionForm recipe_id={ this.props.match.params.recipeId } createDirection={ this.props.createDirection } />);
  }

  if(array_comments[0].body !== "default"){
    comment_list_or_form = ( <CommentListContainer recipe_id={ this.props.match.params.recipeId } />);
  } else {
    comment_list_or_form =( <CommentForm recipe_id={ this.props.match.params.recipeId } createComment={ this.props.createComment } author={this.props.session_username}/>);
  }

  if(array_likes[0].id !== undefined){

    like_list_or_form = ( <LikeListContainer recipe_id={ this.props.match.params.recipeId } />);
  } else {
    like_list_or_form =( <LikeForm recipe_id={ this.props.match.params.recipeId } createLike={ this.props.createLike } user_id={this.props.session_username}/>);
  }

  let destroyRecipeButton = (<p>drb</p>);
  let author_signed_in = (this.props.session_username &&
    this.props.session_username === this.state.recipe.recipe.author);
  let edit_general_recipe_details;

  if(this.state.recipe.recipe.description !== "default" && author_signed_in) {

    destroyRecipeButton = (<button className="deleteRecipe" onClick={ this.deleteTheRecipe }>Delete Recipe</button>);
    edit_general_recipe_details = (<RecipeFormContainerUpdate />);
  } else {

    destroyRecipeButton = "";
    edit_general_recipe_details = "";
  }


    return (
      <section className="recipe-detail">
      <h1>{this.state.recipe.recipe.title}</h1>
      <h4>Recipe Submitted By:{this.state.recipe.recipe.author}</h4>

       <img src={this.state.recipe.recipe.image_url} alt={this.state.recipe.recipe.title} />
       <h3>{this.state.recipe.recipe.description}</h3>
         <h2>Tags: </h2>
         <ul className="recipe-tags">
         {theTags}
         {like_list_or_form}
         </ul>
         <h2> Ingredients: </h2>
         <div>
        {theIngredients}
         </div>
         {ingredient_list_or_form}
         <h2> Directions: </h2>
         {direction_list_or_form}
         <div>
        {theDirections}
         </div>

         <h2>Comments: </h2>
         {comment_list_or_form}

         {edit_general_recipe_details}
         {destroyRecipeButton}

      </section>
    );
  }
}

export default RecipeDetail;
