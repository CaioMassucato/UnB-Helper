import React from 'react';
import { Route, Redirect } from "react-router-dom"
import Header from '../../components/Header';
import Note from '../../components/Note';
import {api} from "../../api";

import './styles.css';

export default class Notes extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      name: null,
      notes: [],
      liked: [],
      filter: '',
      redirect: false
    }
  }

  componentDidMount() {
    /* fetch('http://localhost:3000/posts/' + this.props.match.params.id) // Mudar isso pra não ter problema de CORS
      .then(response => response.json())
      .then(data => this.setState({notes : data}))
      .catch(error => console.log(error.message)); */
      api.get("/posts").then(response => {
        this.setState({ notes: response.data });
      });
  

    this.setSubjectName();    
  }

  likePost = (id) => {
    console.log("Liked post with id=" + id);
  }

  addPost = (content) => {
    
  }

  setSubjectName = () => {
    fetch('http://localhost:3000/subjects/' + this.props.match.params.id)
    .then(response => response.json())
    .then(data => this.setState({name : data.name }))
    .catch(error => console.warn(error));

    if(this.state.name == null){
      console.log("Page not Found");
    }
  }

  updateFilter(event) {
    this.setState({filter: event.target.value.substr(0,40)});
  }

  Redirect = event => {
    this.setState({ redirect: true })
  }

  render(){
    let filteredNotes = this.state.notes.filter(
      (note) => {
        return note.content.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(this.state.filter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) !== -1;
      }
    );

    if (this.state.redirect) {
      return <Redirect to="/post" />;
    }

    return (
      <div>
        <Header title={this.state.name} type="notesTitle"/>
        <input className="filter" type="text" value={this.state.filter} onChange={this.updateFilter.bind(this)}/>
        <div className="notes">
          {
            filteredNotes.map((noteData) => 
              <Note key={noteData.id} id={noteData.id} message={noteData.content} author={noteData.name} likes={noteData.likes} likeHandler={this.likePost} liked={false}/>
            )
          }
        <button className="add-button" onClick={this.Redirect}>
          <div className="fa fa-plus"/>
        </button>
        </div>
      </div>
    )
  }
}