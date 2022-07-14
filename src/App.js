import "./App.css";

import Form from "./Form.js";
import { Display } from "./Form.js";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { useState, useEffect } from "react";

function App() {
  const [Magic, setMagic] = useState("");
  const [Displaydetails, SetDisplaydetails] = useState([]);
  const fetchdata = (log) => {
    // let [log.name,log.sign,log.day ] = SetDisplaydetails([]);
    console.log(SetDisplaydetails(log));
    // console.log(log.name);
    console.log(log.sign, log.day);

    fetch(
      `https://aztro.sameerkumar.website/?sign=${log.sign}&day=${log.day}`,
      {
        method: "POST",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setMagic(data);
        console.log(Magic);
      });
  };

  console.log(Magic);

  // useEffect(() => {
  //   setMagic(JSON.parse(window.localStorage.getItem("Magic")));
  // }, []);
  useEffect(() => {
    window.localStorage.setItem("Magic", JSON.stringify(Magic));

    // console.log(true);
  }, [Magic]);

  return (
    <div className="App">
      <div className="Form">
        <Form fetchdata={fetchdata} />
      </div>
      {Magic && (
        <div className="Display">
          <Display data={Magic} details={Displaydetails} />
        </div>
      )}
    </div>
  );
}

export default App;
