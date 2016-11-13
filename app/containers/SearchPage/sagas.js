import {call, put, fork, select, take, cancel} from 'redux-saga/effects';
import {takeLatest} from 'redux-saga';
import {selectExpertiseId} from 'containers/SearchPage/selectors';
import {businessExpertiseLoaded, businessExpertiseLoadingError} from 'containers/SearchPage/actions';
import {LOAD_BUSINESS_EXPERTISE} from 'containers/SearchPage/constants';
import {LOCATION_CHANGE} from 'react-router-redux';
import request from 'utils/request';

// Individual exports for testing
export function* getBusinessExpertiseListByExpertiseId() {
  // Select username from store
  const expertiseId = yield select(selectExpertiseId());
  const requestURL = `http://hack-api.skillask.com/profiles/api/business-expertise/?expertiseId=${expertiseId}`;

  try {
    // Call our request helper (see 'utils/request')
    const businessExpertise = yield call(request, requestURL);
    yield put(businessExpertiseLoaded(businessExpertise, expertiseId));
  } catch (err) {
    yield put(businessExpertiseLoadingError(err));
  }
}

/**
 * Watches for LOAD_BUSINESS_EXPERTISE actions and getBusinessExpertiseListByExpertiseId when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
export function* getBusinessExpertiseListByExpertiseIdWatcher() {
  yield fork(takeLatest, LOAD_BUSINESS_EXPERTISE, getBusinessExpertiseListByExpertiseId);
}

/**
 * Root saga manages watcher lifecycle
 */
export function* bindeeApiData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getBusinessExpertiseListByExpertiseIdWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  bindeeApiData,
];