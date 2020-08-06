import { all, takeLatest, call, put, delay } from "redux-saga/effects";
import api from "../../../services/api";
import {
  filtersCollectionSuccess,
  filtersCollectionFailure,
  createMovieSuccess,
  createMovieFailure,
} from "./actions";
import { toast } from "react-toastify";

import routes from "../../../routes/constant";

export function* collection({ payload }) {
  try {
    const response = yield call(api.get, routes.movies.filters);

    yield delay(300);

    yield put(filtersCollectionSuccess(response));
  } catch (err) {
    toast.error(err.message);
    return yield put(filtersCollectionFailure());
  }
}
export function* create({ payload }) {
  try {
    const _formData = new FormData();
    _formData.append("type", payload.movie_type);
    _formData.append("title", payload.title);
    _formData.append("author", payload.author);
    _formData.append("writer", payload.writer);
    _formData.append("casts[0]", payload.casts);
    _formData.append("categories[0]", payload.categories);
    _formData.append("sub_categories[0]", payload.sub_categories);
    _formData.append("sub[0][language]", payload.language);
    _formData.append("sub[0][file]", payload.uploadSubtitle);
    _formData.append("video", payload.uploadMovie);
    _formData.append("trailer", payload.uploadTrailer);
    _formData.append("picture", payload.uploadPicture);
    const response = yield call(api.post, routes.movies.create, _formData);

    yield delay(300);

    return yield put(createMovieSuccess(response));
  } catch (err) {
    toast.error(err.message);
    return yield put(createMovieFailure());
  }
}
export default all([
  takeLatest("@movie-form/FILTER_COLLECTION_REQUEST", collection),
  takeLatest("@movie-form/CREATE_REQUEST", create),
]);
