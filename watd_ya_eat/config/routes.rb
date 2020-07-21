Rails.application.routes.draw do
  resources :users do
    resources :slots do
      resources :meals
    end
  end

  resources :slots 

  # get 'slots/:slot_id/meals', to: 'meals#slotlookup'
  get '/users/:user_id/slots/:slot_id/meals/:id/', to: 'users#add_meal'
  post 'auth/login', to: 'authentication#login'
  get 'auth/verify', to: 'authentication#verify'

end
