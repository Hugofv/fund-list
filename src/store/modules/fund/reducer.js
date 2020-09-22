import {
  FETCH_FUND_REQUEST,
  FETCH_FUND_FAILED,
  FETCH_FUND_SUCCESS,
} from './types';

import produce from 'immer';

const InitialState = {
  collection: [],
  loading: false,
  success: false,
};

export default function fund(state = InitialState, action) {
  switch (action.type) {
    case FETCH_FUND_REQUEST:
      return produce(state, (draft) => {
        draft.loading = true;
        draft.success = false;
      });

    case FETCH_FUND_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.collection = action.response;
      });

    case FETCH_FUND_FAILED:
      return produce(state, (draft) => {
        draft.loading = false;
      });

    default:
      return state;
  }
}
