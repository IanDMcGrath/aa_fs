class MakeLikesPolymorphic < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :liked_id
    add_column :likes, :likeable_id, :bigint
    add_column :likes, :likeable_type, :string
  end
end
