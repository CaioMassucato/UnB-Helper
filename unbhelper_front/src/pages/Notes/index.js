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
    fetch('http://localhost:3010/subjects/' + this.props.match.params.id)
    .then(response => response.json())
    .then(data => this.setState({name : data.name }))
    .catch(error => console.warn(error));

    if(this.state.name == null){
      console.log("Page not Found");
    }
  }

  Redirect = event => {
    this.setState({ redirect: true })
  }

  render(){

    if (this.state.redirect) {
      return <Redirect to="/post" />;
    }

    return (
      <div>
        <Header title={this.state.name} type="notesTitle"/>
        <div className="notes">
          {
            this.state.notes.map((notes) => 
              <Note key={notes.id} id={notes.id} message={notes.content} author={notes.name} likes={notes.likes} likeHandler={this.likePost} liked={false}/>
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