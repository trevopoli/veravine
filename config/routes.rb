Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :update, :show, :create]
    resource :session, only: [:create, :destroy]
    resources :wines, only: [:index, :create, :show, :destroy] do
      resources :ratings, only: [:index, :create]
    end
    resources :ratings, only: [:destroy]
    resources :favorites, only: [:create]
    resources :follows, only: [:create]
    get '/wine_brand_search', to: 'wines#brand_search'
    get '/simple_search', to: 'wines#simple_search'
    get '/ratings/', to: 'ratings#index_by_user'
    delete '/follows/', to: 'follows#destroy'
    delete '/favorites/', to: 'favorites#destroy'
  end
  
end
