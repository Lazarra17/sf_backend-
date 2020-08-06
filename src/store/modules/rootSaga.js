import { all } from "redux-saga/effects";

// call auth saga here.
import auth from "./auth/sagas";
import movies from "./movies/sagas";

export default function* rootSaga() {
  return yield all([auth, movies]);
}
