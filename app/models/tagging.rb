class Tagging < ApplicationRecord
  validates :tag_id, :taggable_id, :taggable_type, presence: true
  validates :tag_id, uniqueness: {scope: [:taggable_id, :taggable_type]}

  belongs_to :tag,
  foreign_key: :tag_id,
  class_name: :Tag

  belongs_to :taggable, polymorphic: true
end