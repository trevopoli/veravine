Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :wines, only: [:index, :create, :show, :destroy] do
      resources :ratings, only: [:index, :create]
    end
    resources :ratings, only: [:destroy]
    resources :favorites, only: [:create]
    delete '/favorites/', to: 'favorites#destroy'
  end
  
end
