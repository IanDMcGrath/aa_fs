user = User.create!(username:"DemoUser", email:"demoemail", password:"password", work:"Artist at ___")
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_0003_Layer-0.png')
if file
  user.avatar.attach(io: file, filename: 'fsp_icons_0003_Layer-0.png')
  file = nil
end
user = nil

user = User.create!(username:"Up Grade", email:"upGrade@email.com", password:"you'llneverguess", work:"2D Artist at Zomb Studio")
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_0000_Layer-4.png')
if file
  user.avatar.attach(io: file, filename: 'fsp_icons_0000_Layer-4.png')
  file = nil
end
user = nil

user = User.create!(username:"xX_Pen God_Xx", email:"artweewoo@art.com", password:"iluvart", work:"3D Artist at Obo Studios")
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_0001_Layer-3.png')
if file
  user.avatar.attach(io: file, filename: 'fsp_icons_0001_Layer-3.png')
  file = nil
end
user = nil

user = User.create!(username:"Ben Laser", email:"ben_pewpew@gmail.com", password:"i shoot therefore I pew", work:"Artist at Home")
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_0003_Layer-1.png')
if file
  user.avatar.attach(io: file, filename: 'fsp_icons_0003_Layer-1.png')
  file = nil
end
user = nil

user = User.create!(username:"Robert Artman", email:"robzar@snailmail.com", password:"enihtnamassti", work: "Artist at Homework Schoolio")
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_0004_Layer-5.png')
if file
  user.avatar.attach(io: file, filename: 'fsp_icons_0004_Layer-5.png')
  file = nil
end
user = nil

user = User.create!(username:"Samuel Cramin", email:"sam_cram@mail.com", password:"but this one's all lowercase", work:"3D Artist at University of Idaho")
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_0005_Layer-6.png')
if file
  user.avatar.attach(io: file, filename: 'fsp_icons_0005_Layer-6.png')
  file = nil
end
user = nil

user = User.create!(username:"Samantha Floresh", email:"SamFlo@gmail.com", password:"what about it!@", work:"Artist at AE ICED")
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_0006_Layer-7.png')
if file
  user.avatar.attach(io: file, filename: 'fsp_icons_0006_Layer-7.png')
  file = nil
end
user = nil

user = User.create!(username:"Crom McGoblin", email:"CromGoblin@email.com", password:"babyBacccRibs", work:"Artist at JV3")
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_0007_Layer-8.png')
if file
  user.avatar.attach(io: file, filename: 'fsp_icons_0007_Layer-8.png')
  file = nil
end
user = nil

user = User.create!(username:"Art Man", email:"artman@email.com", password:"secret zelda reference", work:"Tech Artist at Armarzorn LTE")
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_0007_Layer-8.png')
if file
  user.avatar.attach(io: file, filename: 'fsp_icons_0007_Layer-8.png')
  file = nil
end
user = nil

# User.create!(username:"", email:"", password:"", avatar:"")