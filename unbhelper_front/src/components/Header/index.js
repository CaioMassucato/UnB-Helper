import React, { Component } from 'react';
import './style.css';
import logo from '../../assets/logo.svg';

export default class Header extends Component {
  render(){
    return(
      <div className="header">
        <img src={logo} alt="Helper Logo" className="logo"/>
        <span className="mainTitle">UnB Helper</span>
      </div>
    )
  }
}