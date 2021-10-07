export const fetchTags = () => (
  $.ajax({
    url: '/api/tags',
    method: 'GET'
  })
);