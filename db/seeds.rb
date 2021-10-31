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

# User.create!(username:"username", email:"email", password:"password", avatar:"fsp_icons_0003_Layer-0.png")
# User.create!(username:"crotchety", email:"crowman@email.com", password:"you'llneverguess", avatar:"fsp_icons_0004_Layer-5.png")
# User.create!(username:"xX_PenGod_Xx", email:"artweewoo@art.com", password:"iluvart", avatar:"fsp_icons_0016_Layer-17.png")
# User.create!(username:"LazorBen", email:"pewpew1337@gmail.com", password:"i shoot therefore I pew", avatar:"fsp_icons_0000_Layer-4.png")
# User.create!(username:"itsSamanthine", email:"samzar@snailmail.com", password:"enihtnamassti", avatar:"fsp_icons_0001_Layer-3.png")
# User.create!(username:"aBoUtTiMe", email:"sPelLiNgAlTeRnAtInGcApSiShArD@mail.com", password:"but this one's all lowercase", avatar:"fsp_icons_0006_Layer-7.png")
# User.create!(username:"NotAboutIt", email:"imNotAboutIt@gmail.com", password:"what about it!@", avatar:"fsp_icons_0003_Layer-1.png")
# User.create!(username:"A_is_for_fAngus", email:"beefboi@email.com", password:"babyBacccRibs", avatar:"fsp_icons_0004_Layer-5.png")
# User.create!(username:"TRI_ART", email:"ArtaRtarT@email.com", password:"secret zelda reference", avatar:"fsp_icons_0002_Layer-2.png")
# # User.create!(username:"", email:"", password:"", avatar:"")





# # art 1
# art = Art.new(artist_id: 1, title:"StarRacerX", description:"Created with 3ds Max and Substance Painter")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/RSIWIPShip.PNG')
# if file
#   art.artpanels.attach(io: file, filename: 'RSIWIPShip.PNG')
#   file = nil
# end
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/jetgreybox.png')
# if file
#   art.artpanels.attach(io: file, filename: 'jetgreybox.png')
#   file = nil
# end
# art = nil

# # art 2
# art = Art.create!(artist_id: 2, title:"Coffee Bacon", description:"Animated Logo")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/coffeebaconStillFrame.png')
# if file
#   art.artpanels.attach(io: file, filename: 'coffeebaconStillFrame.png')
#   file = nil
# end
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/coffeebacon.gif')
# if file
#   art.artpanels.attach(io: file, filename: 'coffeebacon.gif')
#   file = nil
# end
# art = nil