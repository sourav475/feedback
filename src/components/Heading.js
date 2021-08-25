import React from 'react';
import {Heading} from '@shopify/polaris';

export class Head extends React.Component {
  render() {
    return (
      <Heading>{this.props.name}</Heading>
    );
  }
}