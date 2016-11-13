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
import {loadBusinessExpertise} from 'containers/SearchPage/actions'

class SearchBar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  handleChange = (value) => {

    console.log(value);
    let action = searchBusinessExpertise(value);
    this.props.dispatch(action);
    action = loadBusinessExpertise();
    this.props.dispatch(action);

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
