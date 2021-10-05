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