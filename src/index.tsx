import React from "react";
import { Marker } from "react-map-gl";

import { ExpansionMarkerProps } from "../types/react-marker-expansions";

import DefaultMarker from "./svg/default.svg";

const ExpansionMarker = (props: ExpansionMarkerProps) => {
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
      <DefaultMarker height={props.size} width={props.size} />
    </Marker>
  );
};

export default ExpansionMarker;
