Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show]
    resources :recipes, only: [:create, :index, :show, :destroy, :update] do
      resources :ingredients, only: [:index, :create]
      resources :directions, only: [:index, :create]
      resources :comments, only: [:index, :create]
      resources :likes, only: [:index, :create]
    end

    resource :session, only: [:create, :destroy]
    resources :ingredients, only: [:show, :update, :destroy]
    resources :directions, only: [:show, :update, :destroy]
    resources :likes, only: [:update, :destroy]

  end



end
