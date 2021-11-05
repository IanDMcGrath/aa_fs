export const fetchTags = () => (
  $.ajax({
    url: '/api/tags',
    method: 'GET'
  })
);

export const createTaggings = taggings => (
  $.ajax({
    url: "/api/taggings",
    method: "POST",
    data: { taggings },
  })
);

export const updateTaggings = taggings => (
  $.ajax({
    url: "/api/taggings",
    method: "PATCH",
    data: { taggings },
  })
);