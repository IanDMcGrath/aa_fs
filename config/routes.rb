Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {formate: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :update, :show]
  end
end
