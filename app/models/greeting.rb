class Greeting < ApplicationRecord
  validates :salutations, presence: true, uniqueness: true
end
