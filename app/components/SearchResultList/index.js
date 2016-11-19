/**
 *
 * SearchResultList
 *
 */

import React from 'react';
import BusinessExpertiseResult from 'components/BusinessExpertiseResult';
import {Row} from 'hedron';

class SearchResultList extends React.Component { // eslint-disable-line react/prefer-stateless-function


  render() {
    const {businessExpertise} = this.props;
    return (
      <Row>
        {businessExpertise.map((expertise) => {
          return <BusinessExpertiseResult key={expertise.id}  {...expertise} />;
        })}
      </Row>
    );
  }
}

export default SearchResultList;
