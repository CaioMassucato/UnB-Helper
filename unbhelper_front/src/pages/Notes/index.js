import React from 'react';

import Header from '../../components/Header';
import Note from '../../components/Note';

import './styles.css';

export default class Notes extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      name: null,
      notes: [],
      liked: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/posts/' + this.props.match.params.id) // Mudar isso pra não ter problema de CORS
      .then(response => response.json())
      .then(data => this.setState({notes : data}))
      .catch(error => console.log(error.message));

    this.setSubjectName();    
  }

  likePost = (id) => {
    console.log("Liked post with id=" + id);
  }

  addPost = (content) => {
    
  }

  setSubjectName = () => {
    fetch('http://localhost:3010/subjects/' + this.props.match.params.id)
    .then(response => response.json())
    .then(data => this.setState({name : data.name }))
    .catch(error => console.warn(error));

    if(this.state.name == null){
      console.log("Page not Found");
    }
  }

  render(){

    return (
      <div>
        <Header title={this.state.name} type="notesTitle"/>
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