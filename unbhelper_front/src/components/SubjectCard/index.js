import React from 'react';
import "./style.css";

export default class SubjectCard extends React.Component {
  render(){
    return (
      <div className="subjectCard">
        <div className="container">
          <p className="title"> {this.props.title} </p>
          <p className="subtitle"> {this.props.subtitle} </p>
        </div>
      </div>
    )
  }
}