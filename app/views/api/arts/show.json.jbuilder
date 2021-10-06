json.set! @art.id do
  json.extract! @art, :id, :artist_id, :title, :description, :created_at
  json.artpanels @art.artpanels.map { |file| url_for(file) }
  json.set! :artist do
    json.extract! @art.artist, :username, :avatar, :work
  end
end

json.comments do
  @art.comments.includes(:replies).each do |comment|
    json.set! comment.id do
      json.partial! '/api/comments/comment', comment: comment
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
  # json.art_likes do
    @art.likes.each do |like|
      json.set! like.liker_id do
        json.partial! '/api/likes/like', like: like
      end
    end
  # end
  # json.comment_likes do # build through associations in art.rb
    @art.comments_likes.each do |like|
      json.set! like.liker_id do
        json.partial! '/api/likes/like', like: like
      end
    end
  # end
end


# json.likers do
#   @art.likers.each do |liker|
#     json.set! liker.id do
#       json.extract! liker, :id, :username, :avatar, :work
#     end
#   end
# end