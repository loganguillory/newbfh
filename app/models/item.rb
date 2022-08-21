class Item < ApplicationRecord
    belongs_to :designer
    belongs_to :user

    # has_many :shopping_carts
    # has_one :user
end
