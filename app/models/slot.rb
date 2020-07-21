class Slot < ApplicationRecord
  has_many :meals, dependent: :destroy
end
