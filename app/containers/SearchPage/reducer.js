/*
 *
 * SearchPage reducer
 *
 */

import {fromJS} from 'immutable';
import {
  SEARCH_BUSINESS_EXPERTISE_BY_EXPERTISE_ID,
  LOAD_BUSINESS_EXPERTISE,
  LOAD_BUSINESS_EXPERTISE_SUCCESS,
  LOAD_BUSINESS_EXPERTISE_ERROR,
} from './constants';

const initialState = fromJS({
  expertiseId: null,
  loading: false,
  error: false,
  businessExpertise: []
});

function searchPageReducer(state = initialState, action) {

  switch (action.type) {
    case SEARCH_BUSINESS_EXPERTISE_BY_EXPERTISE_ID:
      return state.set('expertiseId', action.expertiseId);
    case LOAD_BUSINESS_EXPERTISE:
      return state
        .set('loading', true)
        .set('error', false)
        .set('businessExpertise', []);
    case LOAD_BUSINESS_EXPERTISE_SUCCESS:
      return state
        .set('businessExpertise', action.businessExpertise)
        .set('loading', false);
    case LOAD_BUSINESS_EXPERTISE_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default searchPageReducer;
