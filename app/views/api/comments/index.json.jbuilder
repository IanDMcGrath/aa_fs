# json.comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.partial! '/api/comments/comment', comment: comment
      json.set! :commenter do
        json.extract! comment.commenter, :username, :avatar, :work
      end
    end
  end
# end