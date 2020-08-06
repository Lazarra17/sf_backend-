/** @module AuthStore/Saga */

import { all, takeLatest, call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { signInSuccess, signInFailure } from "./actions";

import api from "../../../services/api";
import history from "../../../services/history";

export function* signIn({ payload }) {
  const { email, password } = payload;

  let user = null;

  try {
    // call api here
    const response = yield call(api.post, process.env.REACT_APP_SIGNIN_URL, {
      email,
      password,
    });
    // validate and double check response here.
    user = response.data.user;
  } catch (err) {
    toast.error("Authentication error. Check your data", {
      // change toast here.. manually.
      // make sure to import
      // import { css } from 'glamor';
      // className: css({
      //   background: '#fff !important',
      //   color: 'rgb(221, 90, 70) !important',
      // }),
      // bodyClassName: css({
      //   fontSize: '16px',
      //   fontWeight: 'bold',
      // }),
      // progressClassName: css({
      //   background: 'rgb(221, 90, 70) !important',
      // }),
    });
    return yield put(signInFailure());
  }

  // Sending the success action with the user data
  yield put(signInSuccess(user));
  return history.push("/");
}

export function signOut() {
  return history.push("/");
}

export default all([
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_OUT", signOut),
]);
