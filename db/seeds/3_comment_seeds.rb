Comment.create!(commenter_id: 4, post_id: 1, body:"brilliant")
Comment.create!(commenter_id: 2, post_id: 1, body:"Wow so cool")
Comment.create!(commenter_id: 3, post_id: 1, parent_id: 1, body:"I love this work too")
Comment.create!(commenter_id: 2, post_id: 1, parent_id: 2, body:"choo choo comment thread")
Comment.create!(commenter_id: 5, post_id: 1, body:"great work")

# Comment.create!(commenter_id: , post_id: , parent_id: , body:"")