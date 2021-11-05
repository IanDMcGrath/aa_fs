class Art < ApplicationRecord
  validates :artist_id, :title, presence: true
  validates_length_of :mediums, :subject_matters, maximum: 3

  has_many_attached :artpanels

  belongs_to :artist,
  foreign_key: :artist_id,
  class_name: :User

  has_many :comments,
  as: :commentable,
  dependent: :destroy

  has_many :root_comments,
  -> {where parent_id: nil},
  as: :commentable,
  class_name: :Comment,
  dependent: :destroy

  has_many :comment_replies,
  -> {wherenot parent_id: nil},
  as: :commentable,
  class_name: :Comment,
  dependent: :destroy

  has_many :commenters,
  through: :comments,
  source: :commenter

  has_many :likes,
  as: :likeable,
  dependent: :destroy

  has_many :likers,
  through: :likes,
  source: :liker

  has_many :comments_likes,
  through: :comments,
  source: :likes

  has_many :taggings,
  as: :taggable,
  dependent: :destroy

  has_many :subject_matters,
  -> {where category: "Subject Matter"},
  through: :taggings,
  source: :tag


  has_many :mediums,
  -> {where category: "Medium"},
  through: :taggings,
  source: :tag
end
