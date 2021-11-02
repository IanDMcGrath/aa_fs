@arts.with_attached_artpanels.includes(:mediums, :subject_matters).each do |art|
  json.set! :arts do
    json.set! art.id do
      json.extract! art, :id, :title, :artist_id
      json.artpanels [url_for(art.artpanels[0])]
      json.set! :artist do
        json.extract! art.artist, :username
        json.avatar [url_for(art.artist.avatar)]
      end
    end
  end
  json.set! :tags do
    json.set! :tag_mediums do
      art.mediums.each do |medium|
        json.set! medium.name do
          json.extract! medium, :id, :name
          json.set! :art_ids do
            json.set! art.id do
              json.extract! art, :id
            end
          end
        end
      end
    end
    json.set! :subject_matters do
      art.subject_matters.each do |subject_matter|
        json.set! subject_matter.name do
          json.extract! subject_matter, :id, :name
          json.set! :art_ids do
            json.set! art.id do
              json.extract! art, :id
            end
          end
        end
      end
    end
  end
end

