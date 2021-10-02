json.set! @art.id do
  json.extract! @art, :id, :artist_id, :title, :description, :created_at
  json.artpanels @art.artpanels.map { |file| url_for(file) }
  json.set! :artist do
    json.extract! @art.artist, :username, :avatar, :work
  end
end

json.comments do
  @art.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :commenter_id, :commentable_id, :commentable_type, :parent_id, :created_at, :updated_at
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