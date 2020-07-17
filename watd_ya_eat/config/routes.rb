Rails.application.routes.draw do
  resources :users do
    resources :slots do
      resources :meals
    end
  end

  get 'slots/:slot_id/meals', to: 'meals#slotlookup'
  #get 'users' to: 'users#mealookup'
  post 'auth/login', to: 'authentication#login'
  get 'auth/verify', to: 'authentication#verify'

end
