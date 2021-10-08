class RemoveColumnCommentsPostedId < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :posted_id, :integer
  end
end
