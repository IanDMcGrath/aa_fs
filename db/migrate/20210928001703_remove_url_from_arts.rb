class RemoveUrlFromArts < ActiveRecord::Migration[5.2]
  def change
    remove_column :arts, :url
  end
end
