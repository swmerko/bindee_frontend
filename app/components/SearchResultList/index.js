/**
 *
 * SearchResultList
 *
 */

import React from 'react';
import {FormattedMessage} from 'react-intl';
import messages from './messages';
import BusinessExpertiseResult from 'components/BusinessExpertiseResult';

class SearchResultList extends React.Component { // eslint-disable-line react/prefer-stateless-function


  render() {
    const {businessExpertise} = this.props;
    return (
      <div>
        <FormattedMessage {...messages.header} />
          {businessExpertise.map((expertise) => {
            return <BusinessExpertiseResult key={expertise.id}  {...expertise} />;
          })}
          {/*{businessExpertise.map((expertise) => {*/}
            {/*return <li key={expertise.id}>{expertise.title}</li>*/}
          {/*})}*/}
      </div>
    );
  }
}

export default SearchResultList;
