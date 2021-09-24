class CreateAbouts < ActiveRecord::Migration[5.2]
  def change
    create_table :abouts do |t|
      t.integer :owner_id, null: false
      t.string :world_location
      t.text :job_description
      t.boolean :looking_for_work, null: false, default: false

      t.timestamps
    end
    add_index :abouts, :owner_id, unique: true
  end
end
