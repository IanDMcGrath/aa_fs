# json.tags do
  @tags.each do |tag|
    json.set! tag.category do
      json.set! tag.name do
        json.partial! '/api/tags/tag', tag: tag
      end
    end
  end
# end