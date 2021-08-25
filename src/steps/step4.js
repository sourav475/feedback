import React  from 'react';
import '../App.css';
import { Head } from '../components/Heading'
import {Chips} from '../components/chips'

export class step4 extends React.Component {
    render() {
      return (
        <div className='head'>
      
         <Head name= 'Tell us about the causes that mean the most to you ...'/>
        <div className='chipsstyle'>
          <Chips name='End Poverty'/>
          <Chips name='Life on Land' />
          <Chips name='Health' />
          <Chips name='Equality' />
          <br />
          <Chips name='Responsible Consumption' />
          <Chips name='Climate Action' />
          <Chips name='Clean Water' />
          <br />
          <Chips name='Clean Energy' />
          <Chips name='Oceans and Freshwater' />
          <Chips name='End Hunger' /> 
          <br />
          <div className='links'>
            <a href="#" >Skip</a>
            <button className='button'>Continue</button>
          </div>
         
        </div>
      </div>
      );
    }
  }