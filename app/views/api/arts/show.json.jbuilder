# json.set! @art.id do
  json.extract! @art, :id, :artist_id, :title, :description
  json.artpanelUrls  @art.artpanels.map { |file| url_for(file) }
# end
