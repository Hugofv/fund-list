import {
  FETCH_FUND_REQUEST,
  FETCH_FUND_FAILED,
  FETCH_FUND_SUCCESS,
} from './types';

import api from '../../../services/api';

export const list = () => dispatch => {
  dispatch({
    type: FETCH_FUND_REQUEST,
  });

  api
    .get('/api/category')
    .then(({ data }) => {
      dispatch({
        type: FETCH_FUND_SUCCESS,
        response: data,
      });
    })
    .catch(() => {
      dispatch({
        type: FETCH_FUND_FAILED,
      });
    });
};
