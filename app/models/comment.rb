class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :commenter,
  foreign_key: :commenter_id,
  class_name: :User

  belongs_to :post,
  foreign_key: :post_id,
  class_name: :Art

  belongs_to :parent_comment,
  foreign_key: :parent_id,
  class_name: :Comment,
  optional: true

  has_many :replies,
  foreign_key: :parent_id,
  class_name: :Comment,
  dependent: :destroy

end
