class Art < ApplicationRecord
  validates :artist_id, :title, :url, presence: true

  belongs_to :artist,
  foreign_key: :artist_id,
  class_name: :User

  has_many_attached :photos
end
