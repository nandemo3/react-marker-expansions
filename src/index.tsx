import React from "react";
import { Marker } from "react-map-gl";

import { ExpansionMarkerProps } from "../types/react-map-gl-marker";

import { FaMapMarkerAlt } from "react-icons/fa";

const ExpansionMarker = (props: ExpansionMarkerProps) => {
  try {
    return (
      <Marker
        {...props}
        style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          cursor: "pointer",
          stroke: "none",
          fill: props.color || "black",
        }}
      >
        <FaMapMarkerAlt size={props.size} />
      </Marker>
    );
  } catch (e) {
    console.log(e);
    return <></>;
  }
};

export default ExpansionMarker;
