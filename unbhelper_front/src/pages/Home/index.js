import React from 'react';

import Subjects from '../../components/Subjects'
import Header from '../../components/Header'
import logo from '../../assets/logo.svg';

export default class Home extends React.Component {
  render(){
    return (
      <div>
        <Header  title="UnB Helper" img={logo} type="mainTitle"/>
        <Subjects />
      </div>
    )
  }
}