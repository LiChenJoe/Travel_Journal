import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome"

export default function Journal(props) {
  return (
    <div className="journal">
      <img src={props.data.ImageUrl} alt={props.data.title} />
      <div>
        <FontAwesomeIcon icon="fa-solid fa-location-dot" />
        <h4>{props.data.location}</h4>
        <a href={props.data.googleMapsUrl}>View on Google Maps</a>
        <h2>{props.data.title}</h2>
        <p className="date">
          {props.data.startDate} - {props.data.endDate}
        </p>
        <p className="content">{props.data.description}</p>
      </div>
    </div>
  );
}
