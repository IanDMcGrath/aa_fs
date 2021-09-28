import * as ArtApiUtil from "../util/art_api_util.js";

export const RECEIVE_ARTS = "RECEIVE_ARTS";
export const RECEIVE_ART = "RECEIVE_ART";

const receiveArts = arts => ({
  type: RECEIVE_ARTS,
  arts
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