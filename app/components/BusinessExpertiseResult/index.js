/**
 *
 * BusinessExpertiseResult
 *
 */

import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';
import theme from 'react-toolbox/components/card/theme.scss';

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';


class BusinessExpertiseResult extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {id} = this.props;

    return (
      <Card theme={theme}>
        <CardTitle
          avatar="https://placeimg.com/80/80/animals"
          title="Avatar style title"
          subtitle="Subtitle here"
        />
        <CardMedia
          aspectRatio="wide"
          image="https://placeimg.com/300/200/nature"
        />
        <CardTitle
          title="Title goes here"
          subtitle="Subtitle here"
        />
        <CardText>{dummyText}</CardText>
        <CardActions theme={theme}>
          <Button label="Action 1"/>
          <Button label="Action 2"/>
        </CardActions>
      </Card>
    );
  }
}

export default BusinessExpertiseResult;
