class Tagging < ApplicationRecord
  # main table validators
  validates :tag_id, :taggable_id, :taggable_type, presence: true
  validates :tag_id, uniqueness: {scope: [:taggable_id, :taggable_type]}

  # validates incoming update data # -> art_form.jsx -> f submitUpdate
  validates :actiontype, inclusion: { in: [ "create", "update", "delete" ] }, allow_nil: true
  validates :tagging_id, numericality: { only_integer: true }, allow_nil: true

  attr_reader :actiontype, :tagging_id

  belongs_to :tag,
  foreign_key: :tag_id,
  class_name: :Tag

  # belongs_to :subject_matters,
  # -> {where category: "Subject Matter"},
  # through: :tag,
  # source: :tag

  belongs_to :taggable, polymorphic: true
end