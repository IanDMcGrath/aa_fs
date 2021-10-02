class RemovePostIdFromComments < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :commentable_id
  end
end
