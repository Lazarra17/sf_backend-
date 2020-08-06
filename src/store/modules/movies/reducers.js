import { produce } from "immer";

const INITIAL_STATE = {
  collection: [],
  filters: [],
  data: {},
  success: null,
  loading: true,
};

export function calendarEventsReducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@movie-form/FILTER_COLLECTION_REQUEST": {
        draft.filters = [];
        draft.loading = true;
        break;
      }
      case "@movie-form/FILTER_COLLECTION_SUCCESS": {
        draft.filters = action.payload.data || [];
        draft.loading = false;
        break;
      }
      case "@movie-form/FILTER_COLLECTION_FAILURE": {
        draft.filters = [];
        draft.loading = false;
        break;
      }
      //create
      case "@movie-form/CREATE_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@movie-form/CREATE_SUCCESS": {
        draft.collection = action.payload.data || {};
        draft.success = true;
        draft.loading = false;
        break;
      }
      case "@movie-form/CREATE_FAILURE": {
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
}
