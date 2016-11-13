/*
 *
 * SearchPage
 *
 */

import React from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {selectLoading, selectError, selectBusinessExpertise, selectExpertiseId} from './selectors';
import {createStructuredSelector} from 'reselect';
import {FormattedMessage} from 'react-intl';
import messages from './messages';
import SearchBar from 'components/SearchBar';
import SearchResultList from 'components/SearchResultList';

export class SearchPage extends React.Component { // eslint-disable-line react/prefer-stateless-function


  render() {
    return (
      <article>
        <Helmet
          title="SearchPage"
          meta={[
            {name: 'description', content: 'Description of SearchPage'},
          ]}
        />
        <FormattedMessage {...messages.header} />

        <SearchBar {...this.props}/>
        <SearchResultList {...this.props}/>

      </article>
    );
  }
}

// const mapStateToProps = selectSearchPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  loading: selectLoading(),
  error: selectError(),
  businessExpertise: selectBusinessExpertise(),
  expertiseId: selectExpertiseId(),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
