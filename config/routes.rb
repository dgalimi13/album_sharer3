Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :albums
      resources :genres, only: [:index]
    end 
  end 
end