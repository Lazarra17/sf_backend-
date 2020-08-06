export function filtersCollection(payload) {
  return {
    type: "@movie-form/FILTER_COLLECTION_REQUEST",
    payload: { ...payload },
  };
}

export function filtersCollectionSuccess(response) {
  return {
    type: "@movie-form/FILTER_COLLECTION_SUCCESS",
    payload: { ...response },
  };
}

export function filtersCollectionFailure(response) {
  return {
    type: "@movie-form/FILTER_COLLECTION_FAILURE",
    payload: { ...response },
  };
}

export function createMovie(payload) {
  return {
    type: "@movie-form/CREATE_REQUEST",
    payload: { ...payload },
  };
}

export function createMovieSuccess(response) {
  return {
    type: "@movie-form/CREATE_SUCCESS",
    payload: { ...response },
  };
}

export function createMovieFailure(response) {
  return {
    type: "@movie-form/CREATE_FAILURE",
    payload: { ...response },
  };
}

export default {
  filtersCollection,
  filtersCollectionSuccess,
  filtersCollectionFailure,
  createMovie,
  createMovieSuccess,
  createMovieFailure,
};
