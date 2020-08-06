import { produce } from "immer";

/** @module AuthStore/Reducer */

const INITIAL_STATE = {
  token: null,
  isAuthenticated: false,
  loading: false,
};

export function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@auth/SIGN_IN_SUCCESS": {
        draft.user = action.payload.user;
        draft.isAuthenticated = true;
        draft.loading = false;
        break;
      }
      case "@auth/SIGN_IN_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@auth/SIGN_IN_FAILURE": {
        draft.loading = false;
        break;
      }
      case "@auth/SIGN_OUT": {
        draft.user = {};
        draft.isAuthenticated = false;
        break;
      }
      case "@auth/PROFILE_DETAILS": {
        const { field, value } = action.payload;
        draft.user = { ...state.user, [field]: value };
        break;
      }
      default:
    }
  });
}
