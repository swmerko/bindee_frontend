/**
 *
 * SearchBar
 *
 */

import React from 'react';
import Autocomplete from 'react-toolbox/lib/autocomplete';
import {searchBusinessExpertise, loadBusinessExpertise} from 'containers/SearchPage/actions';

class SearchBar extends React.Component { // eslint-disable-line react/prefer-stateless-function


  state = {
    expertiseId: 1
  };

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  handleChange = (value) => {
    this.setState({expertiseId: value});

    value = this.getRandomInt(1, 15);

    let action = searchBusinessExpertise(value);
    this.props.dispatch(action);
    action = loadBusinessExpertise();
    this.props.dispatch(action);
  };

  render() {
    return (
      <Autocomplete label={'Search what you want'} onChange={this.handleChange} value={this.state.expertiseId}/>
    );
  }
}

export default SearchBar;
