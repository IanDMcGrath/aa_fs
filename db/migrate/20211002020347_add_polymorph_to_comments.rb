class AddPolymorphToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :commentable_type, :bigint
    add_column :comments, :commentable_id, :string
    add_index :comments, [:commentable_type, :commentable_id]
  end
end
