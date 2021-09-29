json.art do
json.extract! @art, :id, :artist_id, :title, :description
end

json.artpanelUrls  @art.artpanels.map { |file| url_for(file) }