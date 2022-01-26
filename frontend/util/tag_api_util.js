
import regeneratorRuntime from "regenerator-runtime";

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

export const loopSubmitTags = async (tagsSelected, tagsMedium) => {
  console.log('starting loop submit...');
  let tags = {};
  const len = Object.keys(tagsSelected).length;

  for (let i = 0; i < len; i++) {
    let medium = Object.values(tagsSelected)[i];
    let tagging = { id: medium.id };

    console.log(medium);
    console.log(tagging);

    try {
      await $.ajax({
        url: `/api/taggings/${medium.taggingId}`,
        method: "PATCH",
        data: { tag_id: medium.id },
      });
    }
    catch (err) {
      console.log(err);
    }
    console.log(`loop - ${i}`);

    // tags[tag.id] = tag;
    // tag_id, taggable_id, taggable_type

  }
  console.log('completed loop submit---');
  return tags;
}
