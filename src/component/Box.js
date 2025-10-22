import React from "react";

const Box = (props) => {
  const initialImage =
    "https://i.pinimg.com/736x/cd/bb/25/cdbb2598bdae322e2dba7c49f838ff10.jpg";

  let result;
  if (
    props.title === "computer" &&
    props.result !== "tie" && // !== : 같지않다
    props.result !== ""
  ) {
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }

  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img
        className="item-img"
        // src={props.item && props.item.img}
        src={props.item ? props.item.img : initialImage}
        alt="가위바위보"
      />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
