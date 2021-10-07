import * as APITag from "../util/tag_api_util";

export const RECEIVE_TAGS = "RECEIVE_TAGS";

const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const fetchTags = () => dispatch => (
  APITag.fetchTags().then(tags => dispatch(receiveTags(tags)))
);