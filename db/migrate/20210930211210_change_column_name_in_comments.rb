class ChangeColumnNameInComments < ActiveRecord::Migration[5.2]
  def change
    rename_column :comments, :posted_id, :commentable_id
  end
end
