/*
 *
 * SearchPage actions
 *
 */

import {DEFAULT_ACTION, SEARCH_BUSINESS_EXPERTISE_BY_EXPERTISE_ID} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function searchBusinessExpertise(expertiseId) {
  return {
    type: SEARCH_BUSINESS_EXPERTISE_BY_EXPERTISE_ID,
    expertiseId
  };
}
