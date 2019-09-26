import React from 'react';
import { withRouter } from 'react-router-dom'
import "./style.css";

class SubjectCard extends React.Component {
  constructor(props){
    super(props);

    this.state = {}
  }

  enterPage = () => {
    this.props.history.push('/' + this.props.id);
  }

  render(){
    return (
      <div className="subjectCard">
        <div className="container" onClick={this.enterPage}>
          <span className="dep"> {this.props.dep} </span>
          <br/>
          <span className="name"> {this.props.name} </span>
        </div>
      </div>
    )
  }
}

export default withRouter(SubjectCard);