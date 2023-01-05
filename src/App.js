import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import axios from "axios";
import Essayler from "./components/mainsection/essayLar";

function App() {
  const [deger, setDeger] = useState([]);
  const [sayi, setSayi] = useState(1);
  function sayiHandle() {
    let giris = prompt("Okumak istediğiniz essay sayısını giriniz");
    setSayi(giris);
  }
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=1OchyvAQVBfI1pfW4o335lfVJKo79DB2oCcPATEy&count=" +
          sayi
      )
      .then((response) => {
        setDeger(response.data);
      })
      .catch((error) => console.log(error));
  }, [sayi]);

  return (
    <div>
      {" "}
      <div className="button">
        <button type="number" onClick={sayiHandle}>
          {" "}
          Essay sayısı girmek için butona tıklayınız
        </button>{" "}
      </div>
      <Essayler essayler={deger} />
    </div>
  );
}

export default App;
