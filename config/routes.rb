Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :update, :show]
    resources :arts, only: [:index, :show, :create] do
      resources :comments, only: [:create, :update, :index]
      resources :likes, only: [:index]
    end
    resources :likes, only: [:show, :create, :destroy]
    resources :comments, only: [:show, :destroy]
  end
end
