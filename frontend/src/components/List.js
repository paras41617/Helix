import React from "react";
import "../styles/list.css";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }

  async componentDidMount() {
    await fetch("http://127.0.0.1:8000/api/list_questions/")
      .then((data) => data.json())
      .then((result) => this.setState({ questions: result["questions"] }));
  }

  render() {
    return (
      <div>
        {this.state.questions.map((question, i) => (
          <div id={i}>
            <div class="card">
              <div class="card-header"></div>
              <div class="card-body">
                <h4>{question.title}</h4>
                <p>{question.text}</p>
                <h5>Asked by : </h5>
                <div class="user">
                  <img
                    src={require("../assets/user.PNG")}
                    alt="user"
                  />
                  <div class="user-info">
                    <h5>Pseudo Neat Expert</h5>
                    <small>2 Answers. 1 Question</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default List;
