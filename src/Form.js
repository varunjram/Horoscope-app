import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from "primereact/radiobutton";
// import { useState } from "react";
import { useFormik } from "formik";
import { formik } from "formik";

export default function Form(prop) {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (values.email.length < 4) {
      errors.email = "Must be 5 characters or more";
    }

    if (!values.name) {
      errors.name = "Required";
    }

    return errors;


  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      sign: "",
      day: "",
    },
    validate,
    onSubmit: (values) => {
      prop.fetchdata(values);
      formik.resetForm();
    },
  });

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

  return (
    <div className="Inputcontainer">
      <form onSubmit={formik.handleSubmit} className="InputForm">
        <label htmlFor="sign" className="label-input">
          Sign
        </label>
        <Dropdown
          id="sign"
          className="margin10"
          value={formik.values.sign}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          options={signsItems}
          placeholder="Select a Sign"
        />

        <label htmlFor="name" className="label-input">
          Name
        </label>
        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText
            id="name"
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="input-name"
          />
        </div>
        {formik.touched.name && formik.errors.name ? (
          <p className="error">{formik.errors.name}</p>
        ) : null}

        <div className="Radiobox">
          <div className="field-radiobutton">
            <RadioButton
              inputId="day1"
              name="day"
              value="today"
              onChange={formik.handleChange}
              checked={formik.values.day === "today"}
            />
            <label htmlFor="day1">Today</label>
          </div>
          <div className="field-radiobutton">
            <RadioButton
              inputId="day2"
              name="day"
              value="tomorrow"
              onChange={formik.handleChange}
              checked={formik.values.day === "tomorrow"}
            />
            <label htmlFor="day2">Tomorrow</label>
          </div>
          <div className="field-radiobutton">
            <RadioButton
              inputId="day3"
              name="day"
              value="yesterday"
              onChange={formik.handleChange}
              checked={formik.values.day === "yesterday"}
            />
            <label htmlFor="day3">Yesterday</label>
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
            type="email"
            id="email"
            name="email"
            className="input-email"
            onChange={formik.handleChange}
            nBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <p className="error">{formik.errors.email}</p>
        ) : null}

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
