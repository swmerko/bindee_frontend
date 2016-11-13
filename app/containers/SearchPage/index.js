/*
 *
 * SearchPage
 *
 */

import React from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import selectSearchPage from './selectors';
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

const mapStateToProps = selectSearchPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
