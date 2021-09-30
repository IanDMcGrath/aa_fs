json.set! @art.id do
  json.extract! @art, :id, :artist_id, :title, :description, :created_at
  json.artpanels @art.artpanels.map { |file| url_for(file) }
  json.set! :artist do
    json.extract! @art.artist, :username, :avatar, :work
  end
end
