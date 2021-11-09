json.partial! '/api/comments/comment', comment: @comment
json.likes 0
json.replies {}
if @comment.commenter.avatar
  json.avatar [url_for(@comment.commenter.avatar.avatar_img)]
else
  json.avatar "https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_new_user.png"
end