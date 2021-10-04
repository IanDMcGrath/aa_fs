class Api::CommentsController < ApplicationController

  before_action :underscore_params!

  def create
    @comment = Comment.new(comment_params)
    # @comment.commentable_type = @comment.commentable_type[0].upcase + @comment.commentable_type[1..-1]
    if @comment.save
      render '/api/comments/show'
    else
      render @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find_by(id: params[:id])
    if @comment
      if is_owner(@comment) && @comment.update_attributes(comment_params)
      render '/api/comments/show'
      else
        render @comment.errors.full_messages, status: 422
      end
    else
      render json: ['Something went wrong'], status: 401
    end
  end

  def is_owner(comment)
    current_user.id == comment.commenter_id
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    if @comment && is_owner(@comment)
      if @comment.destroy
        return nil
      else
        render @comment.errors.full_messages, status: 422
        return nil
      end
      render json: ['Something went wrong'], status: 401
    end
  end

  def index
    @comments = Comment.where(commentable_id: params[:commentable_id])
    if @comments
      render 'api/comments/index'
    else
      render json: ['Something went wrong'], status: 401
    end
  end

  def show
    @comment = Comment.find_by(id: params[:id])
    if @comment
      render 'api/comments/show'
    else
      render json: ['Something went wrong'], status: 401
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :commenter_id, :parent_id, :commentable_id, :commentable_type)
    # params.require(:comment).permit(:body)
  end
end
