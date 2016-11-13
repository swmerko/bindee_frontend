/**
 *
 * BaseLayout
 *
 */

import React from 'react';
import TopBar from 'components/TopBar';

export class BaseLayout extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (<div>
        <TopBar />
          {this.props.children}
      </div>
    );
  }
}
export default BaseLayout;
