/*
 *
 * SearchPage actions
 *
 */

import {
  DEFAULT_ACTION,
  SEARCH_BUSINESS_EXPERTISE_BY_EXPERTISE_ID,
  LOAD_BUSINESS_EXPERTISE,
  LOAD_BUSINESS_EXPERTISE_SUCCESS,
  LOAD_BUSINESS_EXPERTISE_ERROR
} from './constants';

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

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_BUSINESS_EXPERTISE
 */
export function loadBusinessExpertise() {
  return {
    type: LOAD_BUSINESS_EXPERTISE,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_BUSINESS_EXPERTISE_SUCCESS passing the repos
 */
export function businessExpertiseLoaded(businessExpertise, expertiseId) {
  return {
    type: LOAD_BUSINESS_EXPERTISE_SUCCESS,
    businessExpertise,
    expertiseId,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_BUSINESS_EXPERTISE_ERROR passing the error
 */
export function businessExpertiseLoadingError(error) {
  return {
    type: LOAD_BUSINESS_EXPERTISE_ERROR,
    error,
  };
}
