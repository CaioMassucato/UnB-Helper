import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Notes extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      id: this.props.match.params.id,
      notes: []
    }
  }

  componentDidMount() {
  }

  render(){
    return (
      <div>

      </div>
    )
  }
}