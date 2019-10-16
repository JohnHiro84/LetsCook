class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
    render :index
  end

  def show
    @recipe = Recipe.find(params[:id])
    # render json: @recipe
    render :show
  end
  #
  def create
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      render :show
    else
      render json: @recipe.errors.full_messages, status: 422
    end
  end

  def destroy
    @Recipe = Recipe.find(params[:id])
    @Recipe.destroy
    render json: @Recipe
  end

  def edit
    @recipe = Recipe.find(params[:id])
    render json: @recipe, include: :tags
  end

  def update
    # @todo = Todo.find(params[:id])
    @recipe = Recipe.find(params[:id])
    if @recipe.update_attributes(recipe_params)
      render json: @recipe

      # redirect_to todo_url(@todo)
    else
      flash.now[:errors] = @recipe.errors.full_messages
      render json: @recipe
    end
  end

  def recipe_params
    params.require(:recipe).permit(:title, :image_url, :description, :author, tag_names: [])
  end
end
