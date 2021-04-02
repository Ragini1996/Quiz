import React, { Component } from "react";
import axios from "axios";
import UserDetails from "./userdetails";
class Main extends Component {
  state = {
    name: "",
    selectedAnswer: "",
    noOfAttempts: 0,
    errCheck: false,
    qusNumber: 0,
    quizList: [
      {
        qus: "Can you identify which animal has such stripes?",
        img: "https://i.ibb.co/Z60Rhkv/img1.jpg",
        option1: "Zebra",
        option2: "Tiger",
        option3: "Cheetah",
        option4: "Giraffe",
        answer: "Zebra",
      },
      {
        qus: "Can you guess the name of this animal?",
        img: "https://i.ibb.co/6gdQ4rK/img2.jpg",
        option1: "Zebra",
        option2: "Lion",
        option3: "Elephant",
        option4: "Giraffe",
        answer: "Elephant",
      },
      {
        qus: "Name the breed of this dog?",
        img: "https://i.ibb.co/SPx1fqw/img3.jpg",
        option1: "Alsatian",
        option2: "Dobermann",
        option3: "Chihuahua",
        option4: "Poodle",
        answer: "Poodle",
      },
      {
        qus: "Guess the name of this animal?",
        img: "https://i.ibb.co/MVNvFRR/img4.jpg",
        option1: "Giraffe",
        option2: "Dog",
        option3: "Tiger",
        option4: "Lion",
        answer: "Lion",
      },
      {
        qus: "Name this farm animal?",
        img: "https://i.ibb.co/VwnS3KC/img5.jpg",
        option1: "Pig",
        option2: "Cow",
        option3: "Goat",
        option4: "Hen",
        answer: "Cow",
      },
      {
        qus: "Which animal have such feathers?",
        img: "https://i.ibb.co/PN3NTg5/a8b388ac52-450.jpg",
        option1: "Peacock",
        option2: "Cow",
        option3: "Goat",
        option4: "Hen",
        answer: "Peacock",
      },
      {
        qus: "Which animal have such scales on their skin?",
        img: "https://i.ibb.co/Rp32Ngt/img7.jpg",
        option1: "Peacock",
        option2: "Snake",
        option3: "Goat",
        option4: "Hen",
        answer: "Snake",
      },
      {
        qus: "Guess this animal?",
        img: "https://i.ibb.co/DK1F7xm/img8.jpg",
        option1: "Peacock",
        option2: "Snake",
        option3: "Giraffe",
        option4: "Hen",
        answer: "Giraffe",
      },
      {
        qus: "Guess the breed of dog?",
        img: "https://i.ibb.co/r57drN7/img9.jpg",
        option1: "Chihuahua",
        option2: "Alsatian",
        option3: "German Shephard",
        option4: "Poodle",
        answer: "Chihuahua",
      },
      {
        qus: "Guess the animal?",
        img: "https://i.ibb.co/8KVZQ43/img10.jpg",
        option1: "Dog",
        option2: "Camel",
        option3: "Tiger",
        option4: "Cow",
        answer: "Tiger",
      },
      {
        qus: "Guess the bird?",
        img: "https://i.ibb.co/GTyGcDK/img11.jpg",
        option1: "Peacock",
        option2: "Hen",
        option3: "Ostrich",
        option4: "Duck",
        answer: "Ostrich",
      },
      {
        qus: "Guess this extinct animal?",
        img: "https://i.ibb.co/LtmVz3G/img12.jpg",
        option1: "Tasmanian Tiger",
        option2: "Dinasour",
        option3: "Dodo",
        option4: "Pyrenean Ibex",
        answer: "Tasmanian Tiger",
      },
      {
        qus: "Guess this extinct animal?",
        img: "https://i.ibb.co/KLpXgJn/img13.jpg",
        option1: "Tasmanian Tiger",
        option2: "Dinasour",
        option3: "Mammoth",
        option4: "Pyrenean Ibex",
        answer: "Mammoth",
      },
      {
        qus: "Guess this mammal animal?",
        img: "https://i.ibb.co/r27D13L/img14.jpg",
        option1: "Lynx",
        option2: "Cat",
        option3: "Hyna",
        option4: "Jackal",
        answer: "Lynx",
      },
      {
        qus: "Guess this animal?",
        img: "https://i.ibb.co/jGp1jH7/img15.jpg",
        option1: "Horse",
        option2: "Donkey",
        option3: "Zebra",
        option4: "Unicorn",
        answer: "Unicorn",
      },
      {
        qus: "Guess this animal?",
        img: "https://i.ibb.co/jGp1jH7/img15.jpg",
        option1: "Horse",
        option2: "Donkey",
        option3: "Zebra",
        option4: "Unicorn",
        answer: "Unicorn",
      },
      {
        qus: "Guess this bird?",
        img: "https://i.ibb.co/d0cc0jk/img16.jpg",
        option1: "Penguin",
        option2: "Ostrich",
        option3: "Eagle",
        option4: "Hen",
        answer: "Eagle",
      },
      {
        qus: "Guess this animal?",
        img: "https://i.ibb.co/WHFTMgT/img17.jpg",
        option1: "Horse",
        option2: "Pony",
        option3: "Donkey",
        option4: "Unicorn",
        answer: "Horse",
      },
      {
        qus: "Guess this animal?",
        img: "https://i.ibb.co/WHFTMgT/img17.jpg",
        option1: "Horse",
        option2: "Pony",
        option3: "Donkey",
        option4: "Unicorn",
        answer: "Horse",
      },
      {
        qus: "Guess this insect?",
        img: "https://i.ibb.co/n1n2Zm4/img18.jpg",
        option1: "Lady bug",
        option2: "Mosquito",
        option3: "Butterfly",
        option4: "Moth",
        answer: "Butterfly",
      },
      {
        qus: "Guess this animal?",
        img: "https://i.ibb.co/3FLDfWR/img20.jpg",
        option1: "Bear",
        option2: "Koala",
        option3: "Panda",
        option4: "Hyna",
        answer: "Panda",
      },
      {
        qus: "Guess this insect?",
        img: "https://i.ibb.co/x8Cc394/img19.jpg",
        option1: "Lady bug",
        option2: "Mosquito",
        option3: "Butterfly",
        option4: "Moth",
        answer: "Lady bug",
      },
    ],
    view: 0,
    num: -1,
  };
  handleNameSubmit = (name) => {
    let num = this.getRandomNumber();
    this.setState({ name: name, view: 1, qusNumber: 1, num: num });
  };
  handleReplay = () => {
    this.setState({
      view: 0,
      errCheck: false,
      qusNumber: 0,
      name: "",
      noOfAttempts: 0,
      selectedAnswer: "",
    });
  };

  getRandomNumber() {
    let rand = Math.floor(Math.random() * 19 + 1);
    return rand;
  }
  handleOptionChange = (e) => {
    this.setState({ selectedAnswer: e.currentTarget.value });
  };
  handleClick = async () => {
    if (
      this.state.selectedAnswer === this.state.quizList[this.state.num].answer
    ) {
      let n = this.getRandomNumber();
      if (this.state.qusNumber === 5) {
        let attempt = this.state.noOfAttempts + 1;
        let err = 0;
        if (attempt <= 5) {
          err = 5 - attempt;
        } else {
          err = attempt - 5;
        }
        console.log("I am in ");
        let api = "https://limitless-taiga-95716.herokuapp.com/";
        let data = { name: this.state.name, errors: err };
        await axios.post(api, data);
        this.setState({ view: 2 });
      } else {
        let q = this.state.qusNumber + 1;
        let attempts = this.state.noOfAttempts + 1;
        console.log(n);
        this.setState({
          num: n,
          errCheck: false,
          qusNumber: q,
          noOfAttempts: attempts,
          selectedAnswer: "",
        });
      }
    } else {
      let attempts = this.state.noOfAttempts + 1;
      this.setState({
        errCheck: true,
        noOfAttempts: attempts,
      });
    }
  };

  render() {
    if (this.state.view === 0) {
      return <UserDetails onSubmit={this.handleNameSubmit} />;
    } else if (this.state.view === 1) {
      return (
        <div className="container">
          <h2 className="text-center">Quiz</h2>
          <div className="row">
            <div className="col-6">
              <div className="text-center">
                <img
                  className="img-fluid "
                  src={this.state.quizList[this.state.num].img}
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="font-weight-bold">
                {this.state.qusNumber} {this.state.quizList[this.state.num].qus}
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  name="selectedAnswer"
                  value={this.state.quizList[this.state.num].option1}
                  onChange={this.handleOptionChange}
                  type="radio"
                  checked={
                    this.state.selectedAnswer ===
                    this.state.quizList[this.state.num].option1
                  }
                />
                <label className="form-check-label">
                  {this.state.quizList[this.state.num].option1}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  name="selectedAnswer"
                  value={this.state.quizList[this.state.num].option2}
                  onChange={this.handleOptionChange}
                  type="radio"
                  checked={
                    this.state.selectedAnswer ===
                    this.state.quizList[this.state.num].option2
                  }
                />
                <label className="form-check-label">
                  {this.state.quizList[this.state.num].option2}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  name="selectedAnswer"
                  value={this.state.quizList[this.state.num].option3}
                  onChange={this.handleOptionChange}
                  type="radio"
                  checked={
                    this.state.selectedAnswer ===
                    this.state.quizList[this.state.num].option3
                  }
                />
                <label className="form-check-label">
                  {this.state.quizList[this.state.num].option3}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  name="selectedAnswer"
                  value={this.state.quizList[this.state.num].option4}
                  onChange={this.handleOptionChange}
                  type="radio"
                  checked={
                    this.state.selectedAnswer ===
                    this.state.quizList[this.state.num].option4
                  }
                />
                <label className="form-check-label">
                  {this.state.quizList[this.state.num].option4}
                </label>
              </div>
              {this.state.errCheck === false ? (
                ""
              ) : (
                <div className="text-danger">Incorrect Answer</div>
              )}
              <button
                className="btn btn-primary"
                onClick={() => this.handleClick()}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.view === 2) {
      return (
        <div className="container text-center">
          <h2 className="text-danger text-center">Game Over</h2>
          <h6>
            You gave {this.state.noOfAttempts + 1 - 5} times incorrect answer.
          </h6>
          <button
            className="btn btn-primary"
            onClick={() => this.handleReplay()}
          >
            Replay
          </button>
        </div>
      );
    }
  }
}

export default Main;
