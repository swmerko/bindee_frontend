/**
 *
 * SearchBar
 *
 */

import React from 'react';
import {FormattedMessage} from 'react-intl';
import messages from './messages';
import Autocomplete from 'react-toolbox/lib/autocomplete';
import {searchBusinessExpertise} from 'containers/SearchPage/actions'

class SearchBar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  handleChange = (value) => {
    value = 5;

    console.log(value);
    console.log(this.props.dispatch);
    // this.props.dispatch(searchBusinessExpertise(value))


  };


  render() {
    return (
      <div>
        <Autocomplete label={'Search what you want'} onChange={this.handleChange}/>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

export default SearchBar;
