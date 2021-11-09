class Avatar < ApplicationRecord
  validates :user_id, presence: true

  has_one_attached :avatar_img

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User
end