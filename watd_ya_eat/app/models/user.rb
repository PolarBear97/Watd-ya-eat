class User < ApplicationRecord
  #has_secure_password
  #validates :password, length: { minimum: 10 }, 
  #on: :create
  #validates :username, presence: true,
  #uniqueness: true 
  has_many :meals, dependent: :destroy
end




