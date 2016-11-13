/**
 *
 * SearchBar
 *
 */

import React from 'react';
import Autocomplete from 'react-toolbox/lib/autocomplete';
import {searchBusinessExpertise, loadBusinessExpertise} from 'containers/SearchPage/actions';
import {Row, Column} from 'hedron';

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
      <Row>
        <Column xs={8} xsShift={2} lg={6} lgShift={3}>
          <Autocomplete label={'Search what you want'} onChange={this.handleChange}/>
        </Column>
      </Row>
    );
  }
}

export default SearchBar;
