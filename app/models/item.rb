class Item < ApplicationRecord
    belongs_to :designer
  

    has_many :shopping_carts
    has_many :users, through: :shopping_carts
    # has_one :user
end
