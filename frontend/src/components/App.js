import React from "react";
import Question from "./Question";
import List from "./List";
import "../styles/app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: false,
    };
    this.question_mode_switch = this.question_mode_switch.bind(this);
  }

  question_mode_switch() {
    this.setState({ question: !this.state.question });
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
              {this.state.question ? <Question popup={this.question_mode_switch} /> : <List />}
            </div>
            <div id="third_section_right_module">
              <div class="card">
                <div class="card-header"></div>
                <div class="card-body">
                  <h2>About</h2>
                  <div class="user">
                    <img
                      src={require("../assets/group.PNG")}
                      alt="user"
                    />
                    <div class="user-info">
                      <small>246 Experts</small>
                    </div>
                  </div>
                  <div class="user">
                    <img
                      src={require("../assets/message.PNG")}
                      alt="user"
                    />
                    <div class="user-info">
                      <small>100k Questions and Answers</small>
                    </div>
                  </div>
                  <div class="user">
                    <img
                      src={require("../assets/up.PNG")}
                      alt="user"
                    />
                    <div class="user-info">
                      <small>50k Upvotes</small>
                    </div>
                  </div>
                  <div class="user">
                    <img
                      src={require("../assets/token.PNG")}
                      alt="user"
                    />
                    <div class="user-info">
                      <small>145 Token Awarded</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
              <div class="card-header"></div>
              <div class="card-body">
                <h2>Top Experts</h2>
                <div class="user">
                  <img
                    src={require("../assets/user.PNG")}
                    alt="user"
                  />
                  <div class="user-info">
                    <h5>Pseudo Neat Expert</h5>
                    <small>47 Upvotes Collected</small>
                  </div>
                </div>
                &nbsp;
                <div class="user">
                  <img
                    src={require("../assets/user.PNG")}
                    alt="user"
                  />
                  <div class="user-info">
                    <h5>Pseudo Neat Expert</h5>
                    <small>47 Upvotes Collected</small>
                  </div>
                </div>
                &nbsp;
                <div class="user">
                  <img
                    src={require("../assets/user.PNG")}
                    alt="user"
                  />
                  <div class="user-info">
                    <h5>Pseudo Neat Expert</h5>
                    <small>47 Upvotes Collected</small>
                  </div>
                </div>
                &nbsp;
                <div class="user">
                  <img
                    src={require("../assets/user.PNG")}
                    alt="user"
                  />
                  <div class="user-info">
                    <h5>Pseudo Neat Expert</h5>
                    <small>47 Upvotes Collected</small>
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
