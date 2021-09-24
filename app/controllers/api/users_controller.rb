class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "/api/users/show"
    end
  end

  def update
    @user = current_user
    if @user && @user.update_attributes(user_params)
      render "/api/users/show"
    elsif @user
      render @user.errors.full_messages, status: 422
    else
      render json: ['Something went wrong'], status: 401
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render "/api/users/show"
    else
      render json: ['User does not exist'], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :avatar)
  end

end
