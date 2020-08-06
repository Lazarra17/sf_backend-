/** @module AuthStore/Actions */

export function signInRequest(email, password) {
  return {
    type: "@auth/SIGN_IN_REQUEST",
    payload: {
      email,
      password,
    },
  };
}

export function signInSuccess(user) {
  return {
    type: "@auth/SIGN_IN_SUCCESS",
    payload: {
      user,
    },
  };
}

export function signInFailure() {
  return {
    type: "@auth/SIGN_IN_FAILURE",
  };
}

export function signOutRequest() {
  return {
    type: "@auth/SIGN_OUT",
  };
}

export function setAuthUser(value, field) {
  return {
    type: "@auth/PROFILE_DETAILS",
    payload: { field, value },
  };
}
