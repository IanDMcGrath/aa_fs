Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :update, :show]
    resources :arts, only: [:index, :show] do
      resources :comments, only: [:create, :update, :index]
    end
    resources :comments, only: [:show, :destroy]
  end
end
