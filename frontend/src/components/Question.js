import React from "react";
import "../styles/question.css";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      title: "",
    };
    this.onchange_text = this.onchange_text.bind(this);
    this.add_question = this.add_question.bind(this);
  }

  onchange_text(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  add_question() {
    console.log(this.state.title)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "title": this.state.title, "text": this.state.text })
  };
    fetch("http://127.0.0.1:8000/api/add_question/", requestOptions)
      .then((data) => data.json())
      .then((result) => console.log(result["message"]));
    window.location.reload()
  }

  render() {
    return (
      <div>
        <div class="card-question">
          <div class="card-header-question"></div>
          <div class="card-body-question">
            <h2>New Question</h2>
            <img
              onClick={this.props.popup}
              src={require("../assets/cross.PNG")}
              alt="user"
            />
          </div>
          <div id="input_div">
            <input
              onChange={this.onchange_text}
              name="title"
              className="input"
              placeholder="Enter the question title"
            ></input>
            <textarea
              onChange={this.onchange_text}
              name="text"
              className="input"
              placeholder="Write your question here"
              rows={15}
            ></textarea>
          </div>
          <button onClick={this.add_question} id="post_button">
            Post
          </button>
        </div>
      </div>
    );
  }
}

export default Question;
