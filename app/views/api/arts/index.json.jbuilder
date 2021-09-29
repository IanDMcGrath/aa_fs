@arts.each do |art|
  json.set! art.id do
    json.extract! art, :id, :title, :artist_id
    json.url url_for(art.artpanels[0])
  end
end