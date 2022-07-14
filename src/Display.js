import React from "react";

export default function Display(prop) {
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

        {/* <div></div> */}
      </div>
    </div>
  );
}
