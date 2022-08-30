Rails.application.routes.draw do
  resources :favorites, only: [:index, :create, :destroy]
  resources :shopping_carts
  resources :items
  resources :designers
  resources :users
 
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#showme"
  patch "/cart/:id", to: "shopping_carts#addToCart"
  get "/displayCart", to: "shopping_carts#displayCart"
  delete "/cart/:id", to: "shopping_carts#destroy"
  # Defines the root path route ("/")
  
end
