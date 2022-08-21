Rails.application.routes.draw do
  resources :favorites, only: [:index, :create, :destroy]
  resources :shopping_carts
  resources :items
  resources :designers
  resources :users
 
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#showme"
  # Defines the root path route ("/")
  # root "articles#index"
end
