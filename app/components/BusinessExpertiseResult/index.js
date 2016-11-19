/**
 *
 * BusinessExpertiseResult
 *
 */

import React from 'react';
import {Card, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
import Avatar from 'react-toolbox/lib/avatar';
import Chip from 'react-toolbox/lib/chip';
import {Button} from 'react-toolbox/lib/button';
import {Column} from 'hedron';

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';


class BusinessExpertiseResult extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderCertificate(data) {

    return <Avatar
      key={data.id}
      src={data.logoUrl || 'http://hack-frontend.skillask.com/static/home/media/images/certificates/workers.png'}
      size={40}
    />;
  }

  renderChip(data) {
    return <Chip
      key={data.id}
    >
      {data.name}
    </Chip>;
  }


  render() {
    const {id, businessProfileName, businessProfileLogoUrl, expertiseName, certificates, expertise} = this.props;

    // const certificatesBoxStyles = {top: 0, right: 0, position: 'absolute', padding: 16};
    // const chipsWrapperStyle = {display: 'flex', flexWrap: 'wrap'};

    return (
      <Column xs={12} lg={6}>
        <Card>
          <CardTitle
            avatar="http://hack-frontend.skillask.com/static/home/media/images/factoryIcon.png"
            title={businessProfileName}
            subtitle="Subtitle here"
            children={<div>
              {/*{certificates.map(this.renderCertificate)}*/}
            </div>}
          />
          <CardText>
            <h4>{expertiseName}</h4>
            <div style={{height: 32, overflow: 'auto'}}>
              {expertise.slice(0, 3).map(this.renderChip)}
            </div>
          </CardText>
          <CardActions>
            <Button label="Action 1"/>
            <Button label="Action 2"/>
          </CardActions>
        </Card>
      </Column>
    );
  }
}

export default BusinessExpertiseResult;
