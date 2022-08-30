class User < ApplicationRecord
has_many :shopping_carts
has_many :items, through: :shopping_carts

has_many :favorites
has_many :designers, through: :favorites

# has_one :item
end
