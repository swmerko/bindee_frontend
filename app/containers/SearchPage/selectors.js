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

export default selectSearchPage;
export {
  selectSearchPage,
  selectExpertiseId,
};
