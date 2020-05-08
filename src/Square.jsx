import React from "react";
import "./Square.css";

function Square(props) {
  const { value, onClick } = props;
  return (
    <button className="square" type="button" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
