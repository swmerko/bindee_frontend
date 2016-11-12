/**
 *
 * TopBar
 *
 */

import React from 'react';
import {FormattedMessage} from 'react-intl';
import messages from './messages';
import {AppBar} from 'react-toolbox/lib/app_bar';
import theme from 'react-toolbox/components/app_bar/theme.scss';

class TopBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppBar theme={theme} title={<FormattedMessage {...messages.header} />}/>
    );
  }
}

export default TopBar;
