class Designer < ApplicationRecord
    has_many :items
    # has_many :favorites
    # has_many :users, through: :favorites
end
