import React from 'react';
import {Navigation} from '@shopify/polaris';
import {HomeMajor, OrdersMajor, ProductsMajor} from '@shopify/polaris-icons';
import {Heading} from '@shopify/polaris';

export  class Nav extends React.Component {
  render() {
    return (
      <Navigation location="/"  >
        <Navigation.Section style={{marginTop: '200px'}}
        items={[
          {
            url: '/path/to/place',
            label: 'Causes',
            
          },
          {
            url: '/path/to/place',
            label: 'Location',
            
          },
          {
            url: '/path/to/place',
            label: 'Feild',
            
          },
          {
            url: '/path/to/place',
            label: 'Hobbies & Interest',
            
          },
          {
            url: '/path/to/place',
            label: 'Special Options',
            
          },
        ]}
        />
      </Navigation>

    );
  }
}
