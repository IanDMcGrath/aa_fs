class CreateTaggings < ActiveRecord::Migration[5.2]
  def change
    create_table :taggings do |t|
      t.integer :tag_id, null: false
      t.references :taggable, polymorphic: true
      t.timestamps
    end
    add_index :taggings, :tag_id
  end
end
