class Api::AvatarsController < ApplicationController
  def create
    @avatar = Avatar.new(avatar_params)
    if @avatar && @avatar.save
      return nil
    elsif @avatar
      render @avatar.errors.full_messages, status: 422
    else
      render json: ['Something went wrong'], status: 401
    end
  end

  def update
    @avatar = Avatar.find_by(id: params[:id])
    if @avatar && @avatar.update_attributes(avatar_params)
      return nil
    elsif @avatar
      render @avatar.errors.full_messages, status: 422
    else
      render json: ['Something went wrong'], status: 401
    end
  end

  private
  def avatar_params
    params.require(:avatar).permit(:user_id, :avatar_img)
  end
end
