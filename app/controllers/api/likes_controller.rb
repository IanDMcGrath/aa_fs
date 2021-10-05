class Api::LikesController < ApplicationController

  before_action :underscore_params!

  def create
    @like = Like.new(like_params)
    puts @like
    if @like.save
      render json: '/api/like/show'
    else
      render @like.errors.full_messages, status: 401
    end
  end

  def index
    @likes = Like.where(likeable_id: params[:likeable_id])
    if @likes
      render json: '/api/likes/index'
    else
      render json: ['Something went wrong'], status: 401
    end
  end

  def destroy
    @like = Like.find_by(id: params[:id])
    if @like.destroy
      return nil
    else
      render @like.errors.full_messages, status: 422
    end
  end

  private

  def like_params
    params.require(:like).permit(:liker_id, :likeable_id, :likeable_type)
  end
end
