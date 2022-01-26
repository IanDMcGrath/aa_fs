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

export const updateArt = (artId, formData) => (
  $.ajax({
    url: `/api/arts/${artId}`,
    method: "PATCH",
    data: formData,
    contentType: false,
    processData: false
  })
);

export const deleteArt = artId => (
  $.ajax({
    url: `/api/arts/${artId}`,
    method: "DELETE"
  })
);