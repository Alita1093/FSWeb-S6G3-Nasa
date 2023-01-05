import React from "react";
import Essay from "./essay";
import "./essay.css";

const Essayler = (props) => {
  const { essayler } = props;
  console.log(essayler);

  return (
    <div className="groupEssays">
      {essayler.map((item) => (
        <Essay veri={item} />
      ))}
    </div>
  );
};
export default Essayler;
