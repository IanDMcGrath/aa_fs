class Comment < ApplicationRecord
  validates :body, :commenter_id, :commentable_id, :commentable_type, presence: true

  belongs_to :commenter,
  foreign_key: :commenter_id,
  class_name: :User

  belongs_to :commentable, polymorphic: true

  belongs_to :parent_comment,
  foreign_key: :parent_id,
  class_name: :Comment,
  optional: true

  has_many :replies,
  foreign_key: :parent_id,
  class_name: :Comment,
  dependent: :destroy

end
