export const fetchComments = artId => (
  $.ajax({
    url: `/api/arts/${artId}/comments`,
    method: "GET"
  })
);

export const fetchComment = commentId => (
  $.ajax({
    url: `/api/comments/${commentId}`,
    method: "GET"
  })
)

export const createComment = payload => {
  console.log(payload)
  return (
  $.ajax({
    url: `/api/arts/${payload.commentable_id}/comments`,
    method: "POST",
    data: payload
  })
)};

export const updateComment = payload => (
  $.ajax({
    url: `/api/arts/${payload.postId}/comments/${payload.commentId}`,
    method: "PATCH",
    data: payload
  })
);

export const deleteComment = commentId => (
  $.ajax({
    url: `/api/comments/${commentId}`,
    method: "DELETE"
  })
);



export const sortComments = comments => {
  return comments;
  // console.log(comments);
  // comments.sort((cmt1, cmt2) => {
  //   if (cmt1.created_at < cmt2.created_at) {
  //     return 1;
  //   } else if (cmt1.created_at > cmt2.created_at){
  //     return -1;
  //   } else {
  //     return 0;
  //   }
  // });
  // // console.log(comments);
  // let topComments = [];
  // let childComments = [];
  // comments.forEach(cmt => {
  //   if (!cmt.parent_id) {
  //     topComments.push(cmt);
  //   } else {
  //     childComments.push(cmt);
  //   }
  // });

  // childComments.forEach(cmt => {
  //   for (let i=0; i<topComments.length; i++) {
  //     if (topComments[i].id === cmt.parent_id) {
  //       topComments.splice(i,0, cmt);
  //       console.log(`attached id:${cmt.id} to id:${topComments[i].id}`)
  //     }
  //   }
  // });


  // let remainingComments = comments.dup;
  // let resultComments = {};
  // while (remainingComments.length > 0) {
  //   for (let i=remainingComments.length-1; i>0; i--) {

  //     resultComments[remainingComments[i].parent_id]
  //   }
  // }


  // if parented, tab in once -> order by parent depth
  // let commentArray = [];
  // comments.forEach(comment => {
  //   if (!comment.parent_id) {
  //     commentArray.push([comment]);
  //   } else {
  //     attachCommentToThread(comment, commentArray);
      // for (let i=0; i<commentArray.length; i++) {
      //   for (let j=0; j<commentArray[i].length; j++) {
      //     if (commentArray[i][j].id === comment.parent_id) {
      //       commentArray[i][j].push([comment]);
      //     }
      //   }
      // }
  //   }
  // })
  // console.log(commentArray);
  // return commentArray;
}

const attachCommentToThread = (comment, thread) => {
  for (let i=0; i<thread.length; i++) {
    for (let j=0; j<thread[i].length; j++) {
      if (thread[i][j].id === comment.parent_id) {
        thread[i].push([comment]);
        return null;
      }
    }
  }
}

const bSearchCommentThread = (thread, commentId) => {
  if (thread[0].parent_id === commentId) return
}