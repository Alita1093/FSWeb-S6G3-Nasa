import React from "react";
import Essay from "./essay";

const Essayler = (props) => {
  const { essayler } = props;

  return (
    <div className="groupEssays">
      {essayler.map((item) => (
        <Essay veri={item} />
      ))}
    </div>
  );
};
export default Essayler;
