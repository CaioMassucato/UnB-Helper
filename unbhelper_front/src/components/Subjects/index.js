import React, { Component } from 'react';
import './style.css'
import SubjectCard from '../SubjectCard/index'

export default class Subjects extends Component {
  constructor(props){
    super(props);

    this.state = {
      subjects : [],
      filter: '',
    };
  }

  updateFilter(event) {
    this.setState({filter: event.target.value.substr(0,40)});
  }

  componentDidMount() {
    fetch('http://localhost:3000/subjects') 
      .then(response => response.json())
      .then(data => this.setState({subjects : data}))
      .catch(error => console.log(error.message));

  }

  render(){
    let filteredSubjects = this.state.subjects.filter(
      (subject) => {
        return subject.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(this.state.filter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) !== -1;
      }
    );

    return (
      <div>
        <input className="filter" type="text" value={this.state.filter} onChange={this.updateFilter.bind(this)}/>
        <div className="Subjects">
          {
            filteredSubjects.map((subjectData) => 
              <SubjectCard key={subjectData.id} id={subjectData.id} name={subjectData.name} dep={subjectData.teacher} />
            )
          }
        </div>
      </div>
    )
  }
}