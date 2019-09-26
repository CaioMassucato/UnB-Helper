import React from 'react';
import { withRouter } from 'react-router-dom'
import "./style.css";

class SubjectCard extends React.Component {
  constructor(props){
    super(props);

    this.state = {}
  }

  enterPage = () => {
    this.props.history.push({
      pathname: '/' + this.props.id,
      state: {subjectName: this.props.name}
    });
  }

  render(){
    return (
      <div className="subjectCard" onClick={this.enterPage}>
          <span className="dep"> {this.props.dep} </span>
          <br/>
          <span className="name"> {this.props.name} </span>
      </div>
    )
  }
}

export default withRouter(SubjectCard);