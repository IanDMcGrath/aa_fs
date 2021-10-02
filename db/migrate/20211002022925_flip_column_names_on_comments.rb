class FlipColumnNamesOnComments < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :commentable_type
    remove_column :comments, :commentable_id

    add_column :comments, :commentable_type, :string
    add_column :comments, :commentable_id, :bigint
    add_index :comments, [:commentable_type, :commentable_id]
  end
end
