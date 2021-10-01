class Art < ApplicationRecord
  validates :artist_id, :title, presence: true

  belongs_to :artist,
  foreign_key: :artist_id,
  class_name: :User

  has_many_attached :artpanels

  has_many :comments,
  foreign_key: :post_id,
  class_name: :Comment,
  dependent: :destroy
end
