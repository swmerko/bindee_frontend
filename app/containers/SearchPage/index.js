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
import {Row, Column} from 'hedron';
import messages from './messages';
import BaseLayout from 'components/BaseLayout';
import SearchBar from 'components/SearchBar';
import SearchResultList from 'components/SearchResultList';
import SearchMap from 'components/SearchMap';

export class SearchPage extends React.Component { // eslint-disable-line react/prefer-stateless-function


  render() {
    return (
      <BaseLayout>
        <Helmet
          title="SearchPage"
          meta={[
            {name: 'description', content: 'Description of SearchPage'},
          ]}
        />
        <Row>
          <Column xs={12} lg={7}>
          <FormattedMessage {...messages.header} />
            <SearchBar {...this.props}/>
            <SearchResultList {...this.props}/>
          </Column>
          <Column xs={12} lg={5}>
            <SearchMap markers={this.props.businessExpertise}></SearchMap>
          </Column>
        </Row>
      </BaseLayout>
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
