import React from "react";
import "./style.css";

export default class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: this.props.liked,
      likes: this.props.likes
    };
  }

  onLike = () => {
    this.setState({ 
      liked: !this.state.liked,
      likes: this.state.likes += this.state.liked ? -1 : 1,
    });
    this.props.likeHandler(this.props.id);
  };

  render() {
    const icon = this.state.liked ? "fa-heart" : "fa-heart-o";

    return (
        <div className="Note">
          <div className="noteCard">
            <span className="message">{this.props.message}</span>
            <div className="bottomBar">
              <span className="author">{this.props.author}</span>
            </div>
            <div className="likes">
                <span> {this.state.likes} </span>
                <div className={"fa " + icon} onClick={this.onLike}></div>
              </div>
          </div>
        </div>
    );
  }
}
