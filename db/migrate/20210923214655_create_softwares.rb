class CreateSoftwares < ActiveRecord::Migration[5.2]
  def change
    create_table :softwares do |t|
      t.string :name, null: false
      t.string :url, null: false
      t.string :icon_img_url, null: false

      t.timestamps
    end
  end
end
