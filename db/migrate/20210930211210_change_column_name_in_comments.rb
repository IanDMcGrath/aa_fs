class ChangeColumnNameInComments < ActiveRecord::Migration[5.2]
  def change
    rename_column :comments, :posted_id, :post_id
  end
end
