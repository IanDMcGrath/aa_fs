class Comment < ApplicationRecord
  validates :body, :commenter_id, :commentable_id, :commentable_type, presence: true

  belongs_to :commenter,
  foreign_key: :commenter_id,
  class_name: :User

  belongs_to :commentable, polymorphic: true

  has_many :replies,
  foreign_key: :parent_id,
  class_name: :Comment,
  dependent: :destroy

  has_many :likes,
  as: :likeable,
  dependent: :destroy
end
