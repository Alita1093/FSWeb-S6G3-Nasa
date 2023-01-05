import React from "react";
import EssayMain from "./essayMain";
import EssayUst from "./essayUst";

const Essay = (props) => {
  const { veri } = props;
  return (
    <div className="essayTek">
      <EssayUst title={veri.title} date={veri.date} />
      <EssayMain url={veri.url} explanation={veri.explanation} />
    </div>
  );
};
export default Essay;
