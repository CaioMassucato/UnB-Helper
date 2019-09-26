import React from 'react';
import './style.css';

export default class Note extends React.Component {
  render () {
    return (
      <div className="noteCard">
        <span className="message">{this.props.message}</span>
        <br/>
        <span className="author">{this.props.author}</span>
        <div>
          <div className="fa fa-heart-o like"></div>
          <span> {this.props.likes} 2 </span>
        </div>
      </div>
    )
  }
}