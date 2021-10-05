export const fetchLikes = artId => (
  $.ajax({
    url: `/api/arts/${artId}/likes`,
    method: "GET"
  })
);

export const fetchLike = likeId => (
  $.ajax({
    url: `/api/likes/${likeId}`,
    method: "GET"
  })
);

export const createLike = like => (
  $.ajax({
    url: "/api/likes",
    method: "POST",
    data: { like }
  })
);

export const deleteLike = likeId => (
  $.ajax({
    url: `/api/likes/${likeId}`,
    method: "DELETE"
  })
);