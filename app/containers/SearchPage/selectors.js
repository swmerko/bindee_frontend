import {createSelector} from 'reselect';

/**
 * Direct selector to the searchPage state domain
 */
const selectSearchPage = () => (state) => state.get('searchPage');

/**
 * Other specific selectors
 */

const selectExpertiseId = () => createSelector(
  selectSearchPage(),
  (searchPageState) => searchPageState.get('expertiseId')
);


const selectLoading = () => createSelector(
  selectSearchPage(),
  (globalState) => globalState.get('loading')
);

const selectError = () => createSelector(
  selectSearchPage(),
  (globalState) => globalState.get('error')
);

const selectBusinessExpertise = () => createSelector(
  selectSearchPage(),
  (globalState) => globalState.get('businessExpertise')
);


export {
  selectLoading,
  selectError,
  selectBusinessExpertise,
  selectSearchPage,
  selectExpertiseId,
};
