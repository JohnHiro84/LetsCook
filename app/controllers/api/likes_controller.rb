class Api::LikesController < ApplicationController
  def index
    @likes = Recipe.find(params[:recipe_id]).likes
    render :index
  end

  def show
    @like =  Like.find(params[:id])
    render :show
  end

  def create
    @like = Like.new(like_params)
    if @like.save
      render json: @like
    else
      render json: @like.errors.full_messages, status: 422
    end

  end
  def new
    @like = Like.new
    render json: @like
  end

  def create
    @like = Like.new(like_params)
    if @like.save
      render json: @like
      # redirect_to todo_url(@todo)
    else
      flash.now[:errors] = @like.errors.full_messages
      render json: @like
    end
  end

  def edit
    @comment = Comment.find(params[:id])
    render json: @comment
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update_attributes(comment_params)
      render json: @comment

      # redirect_to todo_url(@todo)
    else
      flash.now[:errors] = @comment.errors.full_messages
      render json: @comment
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render json: @like
  end
  private

  def like_params
    params.require(:like).permit(:recipe_id, :user_id, :is_true)
  end
end
