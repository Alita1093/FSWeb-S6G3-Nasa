import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Essayler from "./components/mainsection/essayLar";

function App() {
  const [essayler, setEssayler] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=1OchyvAQVBfI1pfW4o335lfVJKo79DB2oCcPATEy&count=6"
      )
      .then((response) => {
        setEssayler(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Essayler essayler={essayler} />
    </div>
  );
}

export default App;
