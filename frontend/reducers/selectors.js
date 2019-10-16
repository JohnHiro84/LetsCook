// export const selectBench = ({ benches }, benchId) => {
//   return benches[benchId] || { reviewIds: [] };
// };
//
// export const selectReviewsForBench = ({ benches, reviews }, bench) => {
//   return bench.reviewIds.map(reviewId => reviews[reviewId]);
// };
// export const asArray = ({ benches }) => (
//   Object.keys(benches).map(key => benches[key])
// );


/////////////////////////
export const selectAllRecipes = state => Object.values(state.entities.recipes);

export const selectYourRecipes = ({entities}) => {

  let recipes = entities.recipes;
  let user_obj = entities.users;
  let user_arr = Object.keys(user_obj);
  let user_name = user_obj[user_arr[0]].username;
  if(user_name === undefined){
    return [{title: "default", description: "default", author: "default", image_url: "sample1.jpeg" }]
  }
  let yourRecipes = [];

    Object.keys(recipes).forEach(recipe => {
      const rec = recipes[recipe];

      if (recipes[recipe].author === user_name) {
        yourRecipes.push(rec);
      }
    })


  return yourRecipes;

};

export const selectRecipeDirections = (state, recipe) => {

  let directs = state.entities.directions.directions;

  return recipe ? recipe.direction_ids.map(id => state.entities.directions[id]) : [];
};


export const ingredientsByRecipeId = ({ entities }, recipe_id) => {

  let ingreds = entities.recipes.current_recipe.ingredients;
  let ingredientsByRecipeId = [];

    Object.keys(ingreds).forEach(ingredientId => {
      const ingredient = ingreds[ingredientId];

      if (Number(ingreds[ingredientId].recipe_id) === Number(recipe_id)) {
        ingredientsByRecipeId.push(ingredient);
      }
    })


  return ingredientsByRecipeId;

};


export const directionsByRecipeId = ({ entities }, recipe_id) => {

  let directs = entities.recipes.current_recipe.directions;

  let directionsByRecipeId = [];

    Object.keys(directs).forEach(directionId => {
      const direction = directs[directionId];

      if (Number(directs[directionId].recipe_id) === Number(recipe_id)) {
        directionsByRecipeId.push(direction);
      }
    })

  return directionsByRecipeId;

};

export const commentsByRecipeId = ({ entities }, recipe_id) => {

  let comms = entities.recipes.current_recipe.comments;
  let commentsByRecipeId = [];

    Object.keys(comms).forEach(commentId => {
      const comment = comms[commentId];

      if (Number(comms[commentId].recipe_id) === Number(recipe_id)) {
        commentsByRecipeId.push(comment);
      }
    })

  return commentsByRecipeId;

};

export const selectBySearchTerm = (term, recipes_array) => {

  let recipes = recipes_array;

  let yourRecipes = [];

  if(recipes){
    recipes.forEach(recipe => {

    let recipe_title = recipe.title;
    let recipe_description = recipe.description;

    let tag_map = [];
    let tag_ids;
    let tag_string = " ";
    let tag_des = [];
    if(recipe.tags){
      tag_ids = Object.keys(recipe.tags);
      tag_ids.forEach(id => {
        tag_map.push(recipe.tags[id]);
      })
      tag_map.forEach(obj => {
        tag_des.push(obj.name);
      })
      tag_string = tag_des.join(" ");
    } else {
    }

      if( recipe_title.toLowerCase().indexOf(term.toLowerCase()) != -1) {
        yourRecipes.push(recipe);
      } else if ( recipe_description.toLowerCase().indexOf(term.toLowerCase()) != -1){
        yourRecipes.push(recipe);
      } else if ( tag_string.toLowerCase().indexOf(term.toLowerCase()) != -1){
        yourRecipes.push(recipe);
      }
    })
  }

  return yourRecipes;

};


export const likesByRecipeId = ({ entities }, recipe_id) => {
  let all_likes = entities.recipes.current_recipe.likes;
  let likesByRecipe = [];
      Object.keys(all_likes).forEach(likeId => {
        const like = all_likes[likeId];

        if (Number(all_likes[likeId].recipe_id) === Number(recipe_id)) {
          likesByRecipe.push(like);
        }
      })


  return likesByRecipe;

};

export const UserlikedAllready = (likes, user_id) =>{
  let like_true;

  if(!likes) {
    return undefined;
  }
  likes.forEach(like => {
    if(Number(like.user_id) === Number(user_id) ){
      like_true = like;
    } else {
    }
  })
  return like_true;
}
