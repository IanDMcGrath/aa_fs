class CreateArtSoftwares < ActiveRecord::Migration[5.2]
  def change
    create_table :art_softwares do |t|
      t.integer :art_id, null: false
      t.integer :software_id, null: false

      t.timestamps
    end
    add_index :art_softwares, :art_id
    add_index :art_softwares, :software_id
  end
end
