import React from "react";
import "../styles/list.css";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/list_questions/")
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
                <h4 className="question_title">{question.title}</h4>
                <p className="question_text">{question.text}</p>
                <hr className="line"/>
                <h5>Asked by : </h5>
                <div class="user">
                  <img
                    className="user_image"
                    src={require("../assets/user.PNG")}
                    alt="user"
                  />
                  <div class="user-info">
                    <h5 className="color_right_panel_experts">
                      Pseudo Neat Expert
                    </h5>
                    <small className="user_features">
                      2 Answers. 1 Question
                    </small>
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
