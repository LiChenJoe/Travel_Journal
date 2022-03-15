import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Journal(props) {
  return (
    <div className="journal">
      <img src={props.item.imageUrl} alt={props.item.title} />
      <div className="content">
        <div className="placeInfo">
          <FontAwesomeIcon icon={faLocationDot} color="#F55A5A" />
          <h4>{props.item.location}</h4>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2>{props.item.title}</h2>
        <p className="date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="description">{props.item.description}</p>
      </div>
    </div>
  );
}
