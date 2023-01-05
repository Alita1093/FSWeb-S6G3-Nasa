import React from "react";
import "./essay.css";

const EssayUst = (props) => {
  const { title, date } = props;

  return (
    <div className="essay-header">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="date">
        <p>{date}</p>
      </div>
    </div>
  );
};
export default EssayUst;
