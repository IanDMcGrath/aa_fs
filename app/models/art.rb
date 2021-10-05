class Art < ApplicationRecord
  validates :artist_id, :title, presence: true

  belongs_to :artist,
  foreign_key: :artist_id,
  class_name: :User

  has_many_attached :artpanels

  has_many :comments,
  as: :commentable,
  dependent: :destroy

  has_many :comment_replies,
  through: :comments,
  source: :replies

  has_many :commenters,
  through: :comments,
  source: :commenter

  has_many :likes,
  as: :likeable,
  dependent: :destroy

  has_many :likers,
  through: :likes,
  source: :liker

end
