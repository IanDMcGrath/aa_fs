class Api::ArtsController < ApplicationController

  before_action :underscore_params!

  def index
    @arts = Art.all
    if @arts
      render "/api/arts/index"
    else
      render json: ['Something went wrong'], status: 401
    end
  end

  def show
    @art = Art.find_by(id: params[:id])
    if @art
      render "/api/arts/show"
    else
      render json: ['Something went wrong'], status: 401
    end
  end

  def create
    @art = Art.new(art_params)
    if @art.save
      render "/api/arts/show"
    else
      render @art.errors.full_messages, status: 422
    end
  end

  private

  def art_params
    params.require(:art).permit(:artist_id, :title, :description, photos:[])
  end
end
