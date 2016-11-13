/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_BUSINESS_EXPERTISE,
  LOAD_BUSINESS_EXPERTISE_SUCCESS,
  LOAD_BUSINESS_EXPERTISE_ERROR,
} from './constants';

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
export function businessExpertiseLoaded(repos, expertiseId) {
  return {
    type: LOAD_BUSINESS_EXPERTISE_SUCCESS,
    repos,
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
