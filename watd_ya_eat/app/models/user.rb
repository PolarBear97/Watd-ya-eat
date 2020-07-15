class User < ApplicationRecord
  has_many :meals, dependent: :destroy
end
