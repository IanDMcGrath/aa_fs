avatar = Avatar.create!(user_id: 1)
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_new_user.png')
if file
  avatar.avatar_img.attach(io: file, filename: 'fsp_icons_new_user.png')
  file = nil
end
avatar = nil

# avatar = Avatar.create!(user_id: 1)
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_0000_Layer-4.png')
# if file
#   avatar.avatar_img.attach(io: file, filename: 'fsp_icons_0000_Layer-4.png')
#   file = nil
# end
# avatar = nil

avatar = Avatar.create!(user_id: 2)
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_0001_Layer-3.png')
if file
  avatar.avatar_img.attach(io: file, filename: 'fsp_icons_0001_Layer-3.png')
  file = nil
end
avatar = nil

avatar = Avatar.create!(user_id: 3)
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_0003_Layer-1.png')
if file
  avatar.avatar_img.attach(io: file, filename: 'fsp_icons_0003_Layer-1.png')
  file = nil
end
avatar = nil

avatar = Avatar.create!(user_id: 4)
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_0004_Layer-5.png')
if file
  avatar.avatar_img.attach(io: file, filename: 'fsp_icons_0004_Layer-5.png')
  file = nil
end
avatar = nil

avatar = Avatar.create!(user_id: 5)
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_0006_Layer-7.png')
if file
  avatar.avatar_img.attach(io: file, filename: 'fsp_icons_0006_Layer-7.png')
  file = nil
end
avatar = nil

avatar = Avatar.create!(user_id: 6)
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_0005_Layer-6.png')
if file
  avatar.avatar_img.attach(io: file, filename: 'fsp_icons_0005_Layer-6.png')
  file = nil
end
avatar = nil

avatar = Avatar.create!(user_id: 7)
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_0007_Layer-8.png')
if file
  avatar.avatar_img.attach(io: file, filename: 'fsp_icons_0007_Layer-8.png')
  file = nil
end
avatar = nil

avatar = Avatar.create!(user_id: 8)
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_0007_Layer-8.png')
if file
  avatar.avatar_img.attach(io: file, filename: 'fsp_icons_0007_Layer-8.png')
  file = nil
end
avatar = nil

avatar = Avatar.create!(user_id: 9)
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_0003_Layer-0.png')
if file
  avatar.avatar_img.attach(io: file, filename: 'fsp_icons_0003_Layer-0.png')
  file = nil
end
avatar = nil