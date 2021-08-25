import React from 'react'
import chipcss from './chip.css'

export class Chips extends React.Component {
  render() {
    return (
        <div className='chip'>
            {this.props.name}
        </div>
  
    );
  }
}
