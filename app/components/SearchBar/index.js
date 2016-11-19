/**
 *
 * SearchBar
 *
 */

import React from 'react';
import Autocomplete from 'react-toolbox/lib/autocomplete';
import {searchBusinessExpertise, loadBusinessExpertise} from 'containers/SearchPage/actions';

class SearchBar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  handleChange = (value) => {

    value = 5;

    let action = searchBusinessExpertise(value);
    this.props.dispatch(action);
    action = loadBusinessExpertise();
    this.props.dispatch(action);

  };


  render() {
    return (
      <Autocomplete label={'Search what you want'} onChange={this.handleChange}/>
    );
  }
}

export default SearchBar;
