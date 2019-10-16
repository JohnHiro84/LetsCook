class Api::DirectionsController < ApplicationController
  def index
    @directions = Recipe.find(params[:recipe_id]).directions
    render :index
  end

  def show
    @direction =  Direction.find(params[:id])
    render :show
  end

  def create
    @direction = Direction.new(direction_params)
    if @direction.save
      render json: @direction
    else
      render json: @direction.errors.full_messages, status: 422
    end

  end
  def new
    @direction = Direction.new
    render json: @direction
  end

  def create
    @direction = Direction.new(direction_params)
    if @direction.save
      render json: @direction
      # redirect_to todo_url(@todo)
    else
      flash.now[:errors] = @direction.errors.full_messages
      render json: @direction
    end
  end

  def edit
    @direction = Direction.find(params[:id])
    render json: @direction
  end

  def update
    @direction = Direction.find(params[:id])
    if @direction.update_attributes(direction_params)
      render json: @direction

      # redirect_to todo_url(@todo)
    else
      flash.now[:errors] = @direction.errors.full_messages
      render json: @direction
    end
  end

  def destroy
    @direction = Direction.find(params[:id])
    @direction.destroy
    render json: @direction
  end
  private

  def direction_params
    params.require(:direction).permit(:description, :recipe_id)
  end
end
