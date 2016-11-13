/*
 *
 * SearchPage reducer
 *
 */

import {fromJS} from 'immutable';
import {SEARCH_BUSINESS_EXPERTISE_BY_EXPERTISE_ID} from './constants';

const initialState = fromJS({
  expertiseId: null,
  businessExpertises: []
});

function searchPageReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BUSINESS_EXPERTISE_BY_EXPERTISE_ID:
      return state.set('expertiseId', action.expertiseId);
    default:
      return state;
  }
}

export default searchPageReducer;
