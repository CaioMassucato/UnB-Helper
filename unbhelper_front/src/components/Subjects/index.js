import React, { Component } from 'react';
import './style.css'
import SubjectCard from '../SubjectCard/index'

export default class Subjects extends Component {
  constructor(props){
    super(props);

    this.state = {
      subjects : [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3010/subjects') // Mudar isso pra não ter problema de CORS
      .then(response => response.json())
      .then(data => this.setState({subjects : data}))
      .catch(error => console.log(error.message));

  }

  render(){
    return (
      <div className="Subjects">
        {
          this.state.subjects.map((subjectData) => 
            <SubjectCard key={subjectData.id} id={subjectData.id} name={subjectData.name} dep={subjectData.teacher} />
          )
        }
      </div>
    )
  }
}