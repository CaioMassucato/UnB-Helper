import React from 'react';

import Header from '../../components/Header';
import Note from '../../components/Note';

import './styles.css';

export default class Notes extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/posts/' + this.props.match.params.id) // Mudar isso pra não ter problema de CORS
      .then(response => response.json())
      .then(data => this.setState({notes : data}))
      .catch(error => console.log(error.message));
  }

  likeNote() {}

  render(){
    return (
      <div>
        <Header title={this.props.location.state.subjectName} type="notesTitle"/>
        <div className="notes">
          {
            this.state.notes.map((noteData) => 
              <Note key={noteData.id} message={noteData.content} author={noteData.name} likes={noteData.likes}/>
            )
          }
        </div>
      </div>
    )
  }
}