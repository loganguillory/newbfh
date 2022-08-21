class User < ApplicationRecord
has_one :shopping_cart
has_many :items, through: :shopping_cart

has_many :favorites
has_many :designers, through: :favorites

has_one :item
end
