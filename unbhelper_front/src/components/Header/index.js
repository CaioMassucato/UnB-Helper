import React, { Component } from 'react';
import './style.css';

export default class Header extends Component {
  render(){
    return(
      <div className="header">
        {/* Mostra a imagem apenas se for definida */}
        {this.props.img != null && <img src={this.props.img} alt="Helper Logo" className="logo"/>}
        <span className={this.props.type}>{this.props.title}</span>
      </div>
    )
  }
}