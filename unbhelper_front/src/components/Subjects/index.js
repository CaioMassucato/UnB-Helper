import React, { Component } from 'react';
import SubjectCard from '../SubjectCard/index'

export default class Subjects extends Component {
  constructor(props){
    super(props);

    this.state = {
      subjects : [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/subjects') // Mudar isso pra não ter problema de CORS
      .then(response => response.json())
      .then(data => this.setState({subjects : data}))
      .catch(error => console.log(error.message));
  }

  render(){
    return (
      <div className="Subjects">
        {
          this.state.subjects.map((subjectData) => 
            <SubjectCard key={subjectData.id} title={subjectData.name} subtitle={subjectData.teacher} />
          )
        }
      </div>
    )
  }
}