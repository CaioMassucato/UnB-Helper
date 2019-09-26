import React from 'react';

import Header from '../../components/Header';
import Note from '../../components/Note';

import './styles.css';

export default class Notes extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      notes: [],
      liked: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/posts/' + this.props.match.params.id) // Mudar isso pra não ter problema de CORS
      .then(response => response.json())
      .then(data => this.setState({notes : data}))
      .catch(error => console.log(error.message));
  }

  likePost = (id) => {
    console.log("Liked post with id=" + id);
  }

  addPost = (content) => {
    
  }

  render(){
    return (
      <div>
        <Header title={this.props.location.state.subjectName} type="notesTitle"/>
        <div className="notes">
          {
            this.state.notes.map((noteData) => 
              <Note key={noteData.id} id={noteData.id} message={noteData.content} author={noteData.name} likes={noteData.likes} likeHandler={this.likePost} liked={false}/>
            )
          }

        <button className="add-button">
          <div className="fa fa-plus"/>
        </button>
        </div>
      </div>
    )
  }
}