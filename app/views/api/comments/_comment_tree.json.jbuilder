
# json.set! comment.id do
#   json.extract! comment, :id, :body, :commenter_id, :commentable_id, :commentable_type, :parent_id, :created_at, :updated_at
#   json.replies do
#     comment.replies.each do |reply|
#       json.set! reply.id do
#         tree_comments(reply)
#       end
#     end
#   end
# end
