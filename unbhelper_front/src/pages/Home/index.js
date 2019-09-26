import React from 'react';

import Subjects from '../../components/Subjects'
import Header from '../../components/Header'

export default class Home extends React.Component {
  render(){
    return (
      <div>
        <Header  />
        <Subjects />
      </div>
    )
  }
}