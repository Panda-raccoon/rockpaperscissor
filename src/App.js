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
    img: "https://i.pinimg.com/1200x/83/9e/c1/839ec1bf4755a09c52fdf4914588c289.jpg",
  },
  paper: {
    name: "paper",
    img: "https://i.pinimg.com/1200x/e9/e8/05/e9e805d61d579da570064508d309fe8e.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    // console.log("play", userChoice);s
    setUserSelect(choice[userChoice]);
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} />
        {/* <Box title="computer" /> */}
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
