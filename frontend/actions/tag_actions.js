import * as APITag from "../util/tag_api_util";

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const UPDATE_TAGGINGS = "UPDATE_TAGGINGS";

const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

const receiveTaggings = tags => ({
  type: UPDATE_TAGGINGS,
  tags
});

export const fetchTags = () => dispatch => (
  APITag.fetchTags().then(tags => dispatch(receiveTags(tags)))
);

export const updateTaggings = taggings => dispatch => (
  APITag.updateTaggings(taggings).then(taggings => dispatch(receiveTaggings(taggings)))
);