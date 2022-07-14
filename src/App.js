import "./App.css";

import Form from "./Form.js";
import Display from "./Display.js";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState("");
  const [Displaydetails, SetDisplaydetails] = useState([]);
  const fetchdata = (log) => {
    SetDisplaydetails(log);

    fetch(
      `https://aztro.sameerkumar.website/?sign=${log.sign}&day=${log.day}`,
      {
        method: "POST",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setFormData(data);
      });
  };

  return (
    <div>
      <div className="Heading">
        <h1>HOROSCOPE</h1>
        <p>
          “Your path is illuminated by a road-map of stars. I am here to guide
          you!”
        </p>
      </div>
      <div className="App">
        <div className="Form">
          <Form fetchdata={fetchdata} />
        </div>
        {formData && (
          <div className="Display">
            <Display data={formData} details={Displaydetails} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
