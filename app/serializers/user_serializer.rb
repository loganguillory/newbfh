class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :full_name, :email, :admin

  has_many :favorites
end
