import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from "primereact/radiobutton";
import { useState } from "react";

export default function Form(prop) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sign, setSign] = useState("");
  const [day, setDay] = useState("");

  const signsItems = [
    { label: "Aries", value: "aries" },
    { label: "Taurus", value: "taurus" },
    { label: "Gemini", value: "gemini" },
    { label: "Cancer", value: "cancer" },
    { label: "Virgo", value: "virgo" },
    { label: "Libra", value: "libra" },
    { label: "Scorpio", value: "scorpio" },
    { label: "Sagittarius", value: "sagittarius" },
    { label: "Aquarius", value: "aquarius" },
    { label: "Pisces", value: "pisces" },
    { label: "Leo", value: "leo" },
    { label: "Capricorn", value: "capricorn" },
  ];

  const handlechange = (e) => {
    // console.log({ name, email, sign, day });
    prop.fetchdata({ name, email, sign, day });
    e.preventDefault();
  };

  return (
    <div className="Inputcontainer">
      <form onSubmit={handlechange} className="InputForm">
        <label htmlFor="sign" className="label-input">
          Sign
        </label>
        <Dropdown
          className="margin10"
          value={sign}
          options={signsItems}
          onChange={(e) => setSign(e.value)}
          placeholder="Select a Sign"
          // required
        />

        <label htmlFor="name" className="label-input">
          Name
        </label>
        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText
            value={name}
            type="text"
            id="name"
            className="input-name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="Radiobox">
          <div className="field-radiobutton">
            <RadioButton
              inputId="today"
              name="Today"
              value="today"
              onChange={(e) => setDay(e.value)}
              checked={day === "today"}
            />
            <label htmlFor="today">Today</label>
          </div>
          <div className="field-radiobutton">
            <RadioButton
              inputId="tomorrow"
              name="Tomorrow"
              value="tomorrow"
              onChange={(e) => setDay(e.value)}
              checked={day === "tomorrow"}
            />
            <label htmlFor="city2">Tomorrow</label>
          </div>
          <div className="field-radiobutton">
            <RadioButton
              inputId="yesterday"
              name="Yesterday"
              value="yesterday"
              onChange={(e) => setDay(e.value)}
              checked={day === "yesterday"}
            />
            <label htmlFor="city3">Yesterday</label>
          </div>
        </div>

        <label htmlFor="email" className="label-input">
          E-mail
        </label>
        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-envelope" />
          </span>
          <InputText
            value={email}
            type="email"
            id="email"
            className="input-email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* <input type="submit" className="submitbtn" label="Primary" /> */}
        <Button
          icon="pi pi-check"
          label="Submit"
          type="submit"
          className="submitbtn"
        />
      </form>
    </div>
  );
}

export function Display(prop) {
  // const [propdata, setpropdata] = useState(prop);

  // propdata = prop;

  return (
    <div className="Display-Details">
      <h2 className="Name">{prop.details.name}</h2>
      <p className="Sign">{prop.details.sign}</p>
      <div className="Date-Range">{prop.data.date_range}</div>
      <div className="Date">{prop.data.current_date}</div>
      <div className="Description">
        <p>{prop.data.description}</p>
      </div>
      <div className="Extra-Info">
        <div className="Extra-Info-divs">
          <div>Compatibility:</div>
          <div className="Compatibility">{prop.data.compatibility}</div>
        </div>
        <div className="Extra-Info-divs">
          <div>Mood:</div>
          <div className="Mood">{prop.data.mood}</div>
        </div>
        <div className="Extra-Info-divs">
          <div>Color:</div>
          <div className="Color">{prop.data.color}</div>
        </div>
        <div className="Extra-Info-divs">
          <div>Lucky Time:</div>
          <div className="Lucky-time">{prop.data.lucky_time}</div>
        </div>
        <div className="Extra-Info-divs">
          <div>Lucky Number</div>
          <div className="Number">{prop.data.lucky_number}</div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
