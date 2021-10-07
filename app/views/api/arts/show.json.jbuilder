json.set! @art.id do
  json.extract! @art, :id, :artist_id, :title, :description, :created_at
  # json.likes @art.likes.count
  json.artpanels @art.artpanels.map { |file| url_for(file) }
  json.set! :artist do
    json.extract! @art.artist, :username, :avatar, :work
  end
end

json.comments do
  @art.comments.includes(:replies, :likes).each do |comment|
    json.set! comment.id do
      json.partial! '/api/comments/comment', comment: comment
      json.likes comment.likes.count
      json.replies comment.replies.map{|reply| reply.id}
    end
  end
end



json.commenters do
  @art.commenters.each do |commenter|
    json.set! commenter.id do
      json.extract! commenter, :id, :username, :avatar, :work
    end
  end
end

json.likes do
  json.art_likes do
    @art.likes.where(liker_id: current_user.id).each do |like|
      json.set! like.likeable_id do
        json.partial! '/api/likes/like', like: like
      end
    end
  end
  json.comment_likes do
    @art.comments_likes.where(liker_id: current_user.id).each do |like|
      json.set! like.likeable_id do
        json.partial! '/api/likes/like', like: like
      end
    end
  end
end


# json.likers do
#   @art.likers.each do |liker|
#     json.set! liker.id do
#       json.extract! liker, :id, :username, :avatar, :work
#     end
#   end
# end