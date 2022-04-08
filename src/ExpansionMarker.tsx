import React from "react";
import { Marker } from "react-map-gl";
import { FaMapMarkerAlt, FaCircle, FaSquare } from "react-icons/fa";

import { ExpansionMarkerProps } from "../types/react-map-gl-marker-expansions";

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
      {props.shape === "square" && <FaSquare size={props.size} color={color} />}
      {props.shape === "circle" && <FaCircle size={props.size} color={color} />}
      {(props.shape === "default" || props.shape === undefined) && (
        <FaMapMarkerAlt size={props.size} color={color} />
      )}
    </Marker>
  );
};

export default React.memo(ExpansionMarker);
