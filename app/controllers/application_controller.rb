class ApplicationController < ActionController::Base

  skip_forgery_protection

  helper_method :current_user, :logged_in?, :underscore_params!

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_logged_in?
    redirect_to new_session_url unless logged_in?
  end

  def require_logged_out
    redirect_to users_url if logged_in?
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    @current_user.reset_session_token! if logged_in?
    session[:session_token] = nil
    @current_user = nil
  end

  def logged_in?
    !!current_user
  end


  def underscore_params!
    underscore_hash = -> (hash) do
      hash.transform_keys!(&:underscore)
      hash.each do |key, value|
        if value.is_a?(ActionController::Parameters)
          underscore_hash.call(value)
        elsif value.is_a?(Array)
          value.each do |item|
            next unless item.is_a?(ActionController::Parameters)
            underscore_hash.call(item)
          end
        end
      end
    end
    underscore_hash.call(params)
  end

  # def tree_comments(comment)
  #   return {comment.id =>
  #     json.extract! comment, :id, :body, :commenter_id, :commentable_id, :commentable_type, :parent_id, :created_at, :updated_at
  #     json.replies do
  #       comment.replies.each do |reply|
  #         json.set! reply.id do
  #           tree_comments(reply)
  #         end
  #       end
  #     end
  #   end
  # end

end
