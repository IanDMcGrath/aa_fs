export const fetchUser = userId => (
  $.ajax({
    url: `/api/users/${userId}`,
    method: "GET"
  })
);

export const fetchUserArts = userId => (
  $.ajax({
    url: `/api/users/${userId}/arts`,
    method: "GET"
  })
);