class CreateArts < ActiveRecord::Migration[5.2]
  def change
    create_table :arts do |t|
      t.integer :artist_id, null: false
      t.string :title, null: false
      t.text :description
      t.string :url, null: false

      t.timestamps
    end
    add_index :arts, :artist_id
  end
end
