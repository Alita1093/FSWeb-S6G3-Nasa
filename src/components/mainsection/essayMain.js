import React from "react";
import "./essay.css";
const EssayMain = (props) => {
  const { explanation, url } = props;

  return (
    <div className="essayMain">
      <div className="url">
        <img alt="uzayfoto" className="uzayFoto" src={url} />
      </div>
      <div className="explanation">
        <p>{explanation}</p>
      </div>
    </div>
  );
};
export default EssayMain;
