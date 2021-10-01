class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render '/api/comments/show'
    else
      render @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find_by(id: params[:id])
    if @comment && @comment.update_attributes(comment_params)
      render '/api/comments/show'
    else
      render @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    if @comment
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
    @comments = Comment.where(post_id: params[:art_id])
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
    params.require(:comment).permit(:commenter_id, :body, :post_id, :parent_id)
  end
end
