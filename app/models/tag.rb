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
end