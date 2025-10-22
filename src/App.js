import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 1. 박스2개(타이틀, 사진, 결과값) 가로배치
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤으로 가위 바위 보 선택
// 5. 3번4번의 결과에 따라 누가 이겼는지 승패를 따진다.
// 6. 승패결과에 따라 테두리 색깔이 바뀐다. (이기면 초록, 지면 빨강, 비기면 검은색)

const choice = {
  rock: {
    name: "rock",
    img: "https://i.pinimg.com/1200x/15/d5/44/15d544305823b6912863b9bbd26ffb7b.jpg",
  },
  scissors: {
    name: "scissors",
    img: "https://i.pinimg.com/736x/49/bd/d3/49bdd36a81cdb285e748ba467678431b.jpg",
  },
  paper: {
    name: "paper",
    img: "https://i.pinimg.com/1200x/e9/e8/05/e9e805d61d579da570064508d309fe8e.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null); //유저가 선택한 값
  const [computerSelect, setComputerSelect] = useState(null); //컴퓨터가 선택한 값
  const [result, setResult] = useState(""); // 승패 결과

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice)); //judgement(유저가 선택한 값, 컴퓨터가 선택한 값) judgement뜻 = 판단
  };

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    // user === computer 비김
    // user === rock , computer === scissors  유저이김
    // user === scissors , computer === paper  유저이김
    // user === paper , computer === rock  유저이김
    // 나머지 졌음

    // 삼항연산식*************** (공부)
    // 유저입장
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "rock")
      return computer.name === "scissors" ? "win" : "lose";
    else if (user.name === "scissors")
      return computer.name === "paper" ? "win" : "lose";
    else if (user.name === "paper")
      return computer.name === "rock" ? "win" : "lose";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 ‘key(이름)’만 모아서 배열로 만들어주는 함수
    console.log("itemArray", itemArray);
    // let randomItem = Math.random() * itemArray.length; // Math.random() : 0 이상 1 미만의 실수(소수점이 있는 숫자) 를 무작위로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length); // Math.floor() : 소수점 이하를 버리는 함수
    console.log("random", randomItem); // floor 때문에 0,1,2 중 하나의 정수가 나옴
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
