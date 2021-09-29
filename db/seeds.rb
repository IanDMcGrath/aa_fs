# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# drop(:arts)
# drop(:users)




puts "seeds.rb says: hello"
Dir[File.join(Rails.root, 'db', 'seeds/','*.rb')].sort.each do |seed|
  puts "new seed file found"
  load seed
end