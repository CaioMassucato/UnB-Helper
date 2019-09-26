import React from 'react';
import "./style.css";

export default class SubjectCard extends React.Component {
  constructor(props){
    super(props);

    this.state = {}
  }

  enterPage(){
    console.log("entering page");
  }

  render(){
    return (
      <div className="subjectCard">
        <div className="container" onClick={this.enterPage}>
          <span className="subtitle"> {this.props.subtitle} </span>
          <br/>
          <span className="title"> {this.props.title} </span>
        </div>
      </div>
    )
  }
}