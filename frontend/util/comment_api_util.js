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

export const createComment = comment => {
  console.log(comment)
  return (
  $.ajax({
    url: `/api/arts/${comment.commentableId}/comments`,
    method: "POST",
    data: {comment}
  })
)};

export const updateComment = comment => {
  console.log(comment)
  return (
  $.ajax({
    url: `/api/arts/${comment.commentableId}/comments/${comment.id}`,
    method: "PATCH",
    data: {comment}
  })
)};

export const deleteComment = commentId => (
  $.ajax({
    url: `/api/comments/${commentId}`,
    method: "DELETE"
  })
);



export const sortComments = comments => {
  // return comments;
  let remainingComments = Object.assign({}, comments);
  let resultArr = [];

  

  recurseCommentSort(remainingComments, )

  return resultArr;
}

const recurseCommentSort = (allComments, replyIds) => {
  if (Object.values(comments).length <= 0) return null;
  // iterate through replyIds array, adding to result Arr, recurse if reply has replies
  // return resultArr
  let resultArr = [];

  for (let i=0; i<replyIds.length; i++) {
    resultArr.push(allComments[replyIds[i]]);
    if (allComments[replyIds[i]].replies) {
      recurseCommentSort(allComments, allComments[replyIds[i]].replies)
    }
  }

  return resultArr;

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