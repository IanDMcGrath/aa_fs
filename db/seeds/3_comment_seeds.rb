Comment.create!(commenter_id: 4, commentable_type: 'art', commentable_id: 1, body:"brilliant")
Comment.create!(commenter_id: 2, commentable_type: 'art', commentable_id: 1, body:"Wow so cool")
Comment.create!(commenter_id: 3, commentable_type: 'art', commentable_id: 1, parent_id: 1, body:"I love this work too")
Comment.create!(commenter_id: 2, commentable_type: 'art', commentable_id: 1, parent_id: 2, body:"choo choo comment thread")
Comment.create!(commenter_id: 5, commentable_type: 'art', commentable_id: 1, body:"great work")

# Comment.create!(commenter_id: , commentable_type: 'art', commentable_id: , parent_id: , body:"")