# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# drop(:arts)
# drop(:users)




puts "seeds.rb: Starting Seeds:"
Dir[File.join(Rails.root, 'db', 'seeds/','*.rb')].sort.each do |seed|
  puts "new seed file found..."
  load seed
  puts 'seeds loaded'
end
puts 'seeding complete!'

# user = User.create!(username:"DemoUser", email:"demoemail", password:"password", work:"Artist at ___")
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_0003_Layer-0.png')
# if file
#   user.avatar.attach(io: file, filename: 'fsp_icons_0003_Layer-0.png')
#   file = nil
# end
# user = nil
