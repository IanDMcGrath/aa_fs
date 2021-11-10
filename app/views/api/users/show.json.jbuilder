json.partial! 'api/users/user', user: @user
if @user.avatar
  json.avatar [url_for(@user.avatar.avatar_img)]
  json.avatarId @user.avatar.id
else
  json.avatar "https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_new_user.png"
end
