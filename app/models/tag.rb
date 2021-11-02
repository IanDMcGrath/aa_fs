class Tag < ApplicationRecord
  validates :name, :category, presence: true
  validates :name, uniqueness: true

  has_many :taggings,
  foreign_key: :tag_id,
  class_name: :Tagging,
  dependent: :destroy

  has_many :tagged_items,
  through: :taggings,
  source: :taggable

  has_many :mediums,
  -> {where category: "Medium"},
  through: :taggings,
  source: :tag

  has_many :subject_matters,
  -> {where category: "Subject Matter"},
  through: :taggings,
  source: :tag

  has_many :art_taggings,
  -> {where taggable_type: "Art"},
  through: :taggings,
  source: :taggable
end