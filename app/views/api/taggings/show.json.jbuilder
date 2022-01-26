@taggings.each do |tagging|
  json.set! :taggings do
    json.set! tagging.tag_id do
      json.extract! tagging.tag, :name
      json.extract! tagging, :tag_id, :taggable_id
    end
  end
end

# visual format:
# {
#   taggings: {
#     1: {
#       id: 930,
#       tag_id: 1,
#       taggable_id: 345
#     }
#   }
# }