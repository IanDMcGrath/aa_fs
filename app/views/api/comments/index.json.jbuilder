# json.comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.partial! '/api/comments/comment', comment: comment
      json.set! :commenter do
        json.extract! comment.commenter, :username, :work
        if comment.user.avatar
          json.avatar [url_for(comment.user.avatar.avatar_img)]
        else
          json.avatar "https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_new_user.png"
        end
      end
    end
  end
# end