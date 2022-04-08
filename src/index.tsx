import React from "react";
import { Marker } from "react-map-gl";

import { ExpansionMarkerProps } from "../types/react-map-gl-marker";

import { FaMapMarkerAlt, FaCircle, FaSquare } from "react-icons/fa";

const ExpansionMarker = (props: ExpansionMarkerProps) => {
  const color = props.color || "black";
  return (
    <Marker
      {...props}
      style={{
        position: "absolute",
        left: "0px",
        top: "0px",
        cursor: "pointer",
        stroke: "none",
      }}
    >
      {props.variant === "square" && (
        <FaSquare size={props.size} color={color} />
      )}
      {props.variant === "circle" && (
        <FaCircle size={props.size} color={color} />
      )}
      {(props.variant === "default" || props.variant === undefined) && (
        <FaMapMarkerAlt size={props.size} color={color} />
      )}
    </Marker>
  );
};

export default ExpansionMarker;
