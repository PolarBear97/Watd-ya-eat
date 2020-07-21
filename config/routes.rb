Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users do
    resources :slots do
      resources :meals
    end
  end

  resources :slots 

  get '/users/:user_id/slots/:slot_id/meals/:id/', to: 'users#add_meal'
  post 'auth/login', to: 'authentication#login'
  get 'auth/verify', to: 'authentication#verify'
end
