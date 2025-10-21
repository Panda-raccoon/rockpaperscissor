import React from "react";

const Box = (props) => {
  console.log("props", props);
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img
        className="item-img"
        src={props.item && props.item.img}
        alt="가위바위보"
      />
      <h2>WIN</h2>
    </div>
  );
};

export default Box;
