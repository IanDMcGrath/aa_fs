class Api::TagsController < ApplicationController

  def index
    @tags = Tag.all
    if @tags
      puts 'hello'
      render '/api/tags/index'
    else
      render json: ['Something went wrong!'], error: 401
    end

  end

end
