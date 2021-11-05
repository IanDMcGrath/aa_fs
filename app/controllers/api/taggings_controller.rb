class Api::TaggingsController < ApplicationController

  # def create
  #   Tagging.transaction do
  #     @taggings = Tagging.create!(taggings_params)
  #   end
  #   if !@taggings
  #     render json: @taggings.errors.full_messages, status: 422
  #   end
  #   # render
  # end

  def create
    @tagging = Tagging.new(tagging_params);
    if @tagging.save

    else
      render json: @tagging.errors.full_messages, status: 422
    end
  end

  def update
    @tagging = Tagging.find_by(id: params[:id])
    if @tagging
      if @tagging.update_attributes(tag_id: params[:tag_id]);
        render json: ["Successfully updated Tagging"], status: 200
      else
        render json: @tagging.errors.full_messages, status: 422
      end
    else
      render json: ['Something went wrong'], status: 401
    end
  end

  def destroy
    @tagging = Tagging.find_by(id: params[:id])
    if @tagging
      if @tagging.delete
        render json: ["Successfully deleted Tagging"], status: 200
      else
        render json: @tagging.errors.full_messages, status: 422
      end
    else
      render json: ['No Tagging by that Id'], status: 401
    end
  end

  private

  def tagging_params
    params.require(:tagging).permit(:tag_id, :taggable_id, :taggable_type)
    # params.permit(taggings: [:tag_id, :taggable_id, :taggable_type]).require(:taggings)
  end
end
