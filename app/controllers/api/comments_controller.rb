class Api::CommentsController < ApplicationController
  def index
    @comments = Recipe.find(params[:recipe_id]).comments
    render :index
  end

  def show
    @comment =  Comment.find(params[:id])
    render :show
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render json: @comment
    else
      render json: @comment.errors.full_messages, status: 422
    end

  end
  def new
    @comment = Comment.new
    render json: @comment
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render json: @comment
      # redirect_to todo_url(@todo)
    else
      flash.now[:errors] = @comment.errors.full_messages
      render json: @comment
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
    @comment = Comment.find(params[:id])
    @comment.destroy
    render json: @comment
  end
  private

  def comment_params
    params.require(:comment).permit(:recipe_id, :body, :author)
  end
end
