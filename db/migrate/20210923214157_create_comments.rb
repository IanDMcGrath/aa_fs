class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :commenter_id, null: false
      t.integer :posted_id, null: false, polymorphic: true
      t.integer :parent_id
      t.text :body, null: false

      t.timestamps
    end
    add_index :comments, :commenter_id
    add_index :comments, :posted_id
    add_index :comments, :parent_id
  end
end
