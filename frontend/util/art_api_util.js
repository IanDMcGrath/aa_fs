export const fetchArts = () => (
  $.ajax({
    url: "/api/arts",
    method: "GET"
  })
);

export const fetchArt = artId => (
  $.ajax({
    url: `/api/arts/${artId}`,
    method: "GET"
  })
);

export const createArt = art => (
  $.ajax({
    url: "/api/arts",
    method: "POST",
    data: { art }
  })
);

export const updateArt = art => (
  $.ajax({
    url: "/api/arts",
    method: "PATCH",
    data: { art }
  })
);

export const deleteArt = artId => (
  $.ajax({
    url: `/api/arts/${artId}`,
    method: "DELETE"
  })
);