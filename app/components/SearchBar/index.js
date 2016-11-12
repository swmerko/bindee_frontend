/**
*
* SearchBar
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Autocomplete from 'react-toolbox/lib/autocomplete';

class SearchBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Autocomplete label={<FormattedMessage {...messages.label} />}/>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

export default SearchBar;
