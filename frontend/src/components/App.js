import React from "react";
import Question from "./Question";
import List from "./List";
import "../styles/app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: false,
      count_questions: 0,
    };
    this.question_mode_switch = this.question_mode_switch.bind(this);
  }

  question_mode_switch() {
    this.setState({ question: !this.state.question });
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/get_questions_count/")
      .then((data) => data.json())
      .then((result) => this.setState({ count_questions: result["count_questions"]}));
  }

  render() {
    return (
      <div id="head">
        <div id="first_section">
          <div id="div_button">
            <button
              onClick={this.question_mode_switch}
              id="ask_a_question_button"
            >
              Ask a question
            </button>
          </div>
        </div>
        <div id="second_section">
          <div id="near_protocol_div">
            <img
              id="near_protocol_image"
              src={require("../assets/near_protocol.PNG")}
            ></img>
          </div>
        </div>
        <div id="third_section">
          <div id="third_section_adjust">
            <div id="third_section_questions_list">
              {this.state.question ? (
                <Question popup={this.question_mode_switch} />
              ) : (
                <List />
              )}
            </div>
            <div id="third_section_right_module">
              <div class="card">
                <div class="card-header"></div>
                <div class="card-body">
                  <h2 className="right_panel_heading">About</h2>
                  <div class="user">
                    <img className="user_image" src={require("../assets/group.PNG")} alt="user" />
                    <div class="user-info">
                      <div className="poppin_font">246 Experts</div>
                    </div>
                  </div>
                  <div class="user">
                    <img className="user_image" src={require("../assets/message.PNG")} alt="user" />
                    <div class="user-info">
                      <div className="poppin_font">{this.state.count_questions} Questions</div>
                    </div>
                  </div>
                  <div class="user">
                    <img className="user_image" src={require("../assets/up.PNG")} alt="user" />
                    <div class="user-info">
                      <div className="poppin_font">50k Upvotes</div>
                    </div>
                  </div>
                  <div class="user">
                    <img className="user_image" src={require("../assets/token.PNG")} alt="user" />
                    <div class="user-info">
                      <div className="poppin_font">145 Token Awarded</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header"></div>
                <div class="card-body">
                  <h2 className="right_panel_heading">Top Experts</h2>
                  <div class="user">
                    <img className="user_image" src={require("../assets/user.PNG")} alt="user" />
                    <div class="user-info">
                      <h5 className="color_right_panel_experts">Pseudo Neat Expert</h5>
                      <small>47 <img className="upvotes_collected_img" src={require("../assets/Vector.png")} alt="user" /> Collected</small>
                    </div>
                  </div>
                  &nbsp;
                  <div class="user">
                    <img className="user_image" src={require("../assets/user.PNG")} alt="user" />
                    <div class="user-info">
                      <h5 className="color_right_panel_experts">Pseudo Neat Expert</h5>
                      <small>47 <img className="upvotes_collected_img" src={require("../assets/Vector.png")} alt="user" /> Collected</small>
                    </div>
                  </div>
                  &nbsp;
                  <div class="user">
                    <img className="user_image" src={require("../assets/user.PNG")} alt="user" />
                    <div class="user-info">
                      <h5 className="color_right_panel_experts">Pseudo Neat Expert</h5>
                      <small>47 <img className="upvotes_collected_img" src={require("../assets/Vector.png")} alt="user" /> Collected</small>
                    </div>
                  </div>
                  &nbsp;
                  <div class="user">
                    <img className="user_image" src={require("../assets/user.PNG")} alt="user" />
                    <div class="user-info">
                      <h5 className="color_right_panel_experts">Pseudo Neat Expert</h5>
                      <small>47 <img className="upvotes_collected_img" src={require("../assets/Vector.png")} alt="user" /> Collected</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
