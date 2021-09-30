class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :summary, :text
    add_column :users, :contact, :string
    add_column :users, :interests, :string
    add_column :users, :skills, :string
    add_column :users, :software, :string
    add_column :users, :productions, :string
    add_column :users, :work, :string
  end
end
