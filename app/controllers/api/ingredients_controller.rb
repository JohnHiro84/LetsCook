class Api::IngredientsController < ApplicationController
  def index
    @ingredients = Recipe.find(params[:recipe_id]).ingredients
    render :index
  end

  def show
    @ingredient =  Ingredient.find(params[:id])
    render :show
  end

  def create
    @ingredient = Ingredient.new(ingredient_params)
    if @ingredient.save
      render json: @ingredient
    else
      render json: @ingredient.errors.full_messages, status: 422
    end

  end
  def new
    @ingredient = Ingredient.new
    render json: @ingredient
  end

  def create
    @ingredient = Ingredient.new(ingredient_params)
    if @ingredient.save
      render json: @ingredient
      # redirect_to todo_url(@todo)
    else
      flash.now[:errors] = @ingredient.errors.full_messages
      render json: @ingredient
    end
  end

  def edit
    @ingredient = Ingredient.find(params[:id])
    render json: @ingredient
  end

  def update
    @ingredient = Ingredient.find(params[:id])
    if @ingredient.update_attributes(ingredient_params)
      render json: @ingredient

      # redirect_to todo_url(@todo)
    else
      flash.now[:errors] = @ingredient.errors.full_messages
      render json: @ingredient
    end
  end

  def destroy
    @ingredient = Ingredient.find(params[:id])
    @ingredient.destroy
    render json: @ingredient
  end
  private

  def ingredient_params
    params.require(:ingredient).permit(:description, :recipe_id)
  end
end
