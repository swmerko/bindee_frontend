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
  console.log('sono nel searchPageReducer', action);

  switch (action.type) {
    case SEARCH_BUSINESS_EXPERTISE_BY_EXPERTISE_ID:

      console.log('ho settato expertiseId nello stato');
      return state.set('expertiseId', action.expertiseId);
    default:
      return state;
  }
}

export default searchPageReducer;
