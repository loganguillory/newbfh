class ItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :price, :description, :in_stock, :image
end
