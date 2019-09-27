import React, { Component } from 'react'
import "./style.css"
import { Route, Redirect } from "react-router-dom"
import { create_post } from "../../api"

export default class PostForm extends Component {
    state = {
        name: "",
        content: "",
        subject_id:"",
        likes: "",
        posted: false
    };

    updateName = event => {
        this.setState({ name: event.target.value });
    };

    updateContent = event => {
        this.setState({ content: event.target.value });
    };

    updateId = event => {
        this.setState({ subject_id: event.target.value });
    };

    send = event => {
        event.preventDefault();

        create_post(this.state.name, this.state.content, this.state.subject_id)
            .then(response => {
                this.setState({ posted: true });
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {

        if (this.state.posted) {
            return <Redirect to="/113034" />;
        }

        return (
            <>
                <div id="form-main">
                    <div id="form-div">
                        <form className="form" id="form1" onSubmit={this.send}>

                            <p className="name">
                                <input
                                onChange={this.updateName}
                                value={this.state.name} 
                                name="name" 
                                type="text" 
                                className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" 
                                placeholder="Title" id="name" />
                            </p>

                            <p className="email">
                                <input 
                                onChange={this.updateId}
                                value={this.state.subject_id}                  
                                name="email" 
                                type="text" className="validate[required,custom[email]] feedback-input" 
                                id="email" 
                                placeholder="id" />
                            </p>

                            <p className="text">
                                <textarea 
                                onChange={this.updateContent}
                                value={this.state.content}                  
                                name="text" 
                                className="validate[required,length[6,300]] feedback-input" 
                                id="comment" 
                                placeholder="Text"></textarea>
                            </p>


                            <div className="submit">
                                <input type="submit" value="SEND" id="button-blue" />
                                <div className="ease"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }


}

