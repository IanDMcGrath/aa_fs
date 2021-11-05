import * as ArtApiUtil from "../util/art_api_util.js";

export const RECEIVE_ARTS = "RECEIVE_ARTS";
export const RECEIVE_ART = "RECEIVE_ART";
export const REMOVE_ART = "REMOVE_ART";

const receiveArts = payload => ({
  type: RECEIVE_ARTS,
  arts: payload.arts,
  tags: payload.tags
});

const receiveArt = art => ({
  type: RECEIVE_ART,
  art
});

const removeArt = artId => ({
  type: REMOVE_ART,
  artId
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

export const deleteArt = artId => dispatch => (
  ArtApiUtil.deleteArt(artId).then(() => dispatch(removeArt(artId)))
);