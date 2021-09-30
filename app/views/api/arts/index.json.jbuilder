@arts.each do |art|
  json.set! art.id do
    json.extract! art, :id, :title, :artist_id
    json.artpanels [url_for(art.artpanels[0])]
    json.set! :artist do
      json.extract! art.artist, :username, :avatar
    end
  end
end