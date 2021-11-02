import * as ArtApiUtil from "../util/art_api_util.js";

export const RECEIVE_ARTS = "RECEIVE_ARTS";
export const RECEIVE_ART = "RECEIVE_ART";

const receiveArts = payload => ({
  type: RECEIVE_ARTS,
  arts: payload.arts,
  tags: payload.tags
});

const receiveArt = art => ({
  type: RECEIVE_ART,
  art
});



export const fetchArts = () => dispatch => (
  ArtApiUtil.fetchArts().then(arts => dispatch(receiveArts(arts)))
);

export const fetchArt = artId => dispatch => (
  ArtApiUtil.fetchArt(artId).then(art => dispatch(receiveArt(art)))
);

export const createArt = art => dispatch => (
  ArtApiUtil.createArt(art).then(art => dispatch(receiveArt(art)))
);

export const updateArt = art => dispatch => (
  ArtApiUtil.updateArt(art).then(art => dispatch(receiveArt(art)))
);