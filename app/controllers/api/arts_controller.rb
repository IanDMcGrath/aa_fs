class Api::ArtsController < ApplicationController

  before_action :underscore_params!

  def index
    if params[:user_id]
      @arts = User.find_by(id: params[:user_id]).artworks
    else
      @arts = Art.all
    end

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
      # puts "PRINTING TAG_PARAMS !..."
      # puts tag_params
      # puts "FINISHED PRINTING TAG_PARAMS."
      # @tags = Tagging.create(tag_params)
      # if @tags.errors
      #   render @tags.errors.full_messages, status: 422
      # else
        render "/api/arts/show"
      # end
    else
      render @art.errors.full_messages, status: 422
    end
  end

  def update
    @art = Art.find_by(id: params[:id])
    if @art
      if @art.update_attributes(art_params)
      render "/api/arts/show"
      else
        render @art.errors.full_messages, status: 422
      end
    else
      render json: ['Something went wrong'], status: 401
    end
  end

  def destroy
    @art = Art.find_by(id: params[:id])
    if @art
      if @art.delete
        render json: ["Successfully deleted Art"], status: 200
      else
        render @art.errors.full_messages, status: 422
      end
    else
      render json: ['No Art by that Id'], status: 401
    end
  end

  private

  def art_params
    params.require(:art).permit(:artist_id, :title, :description, artpanels: [])
  end

  # def tag_params
  #   params.require(:tagging).permit(tags: [])
  # end
end
