class Api::ArtsController < ApplicationController
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

  private

  def art_params
    params.require(:art).permit(:title, :description, photos:[])
  end
end
