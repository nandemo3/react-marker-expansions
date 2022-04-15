import React from "react";
import { Marker, MarkerProps } from "react-map-gl";
import { FaMapMarkerAlt, FaCircle, FaSquare } from "react-icons/fa";

type ShapeType = "default" | "circle" | "square" | "none";

export interface ExpansionMarkerProps extends MarkerProps {
  size: number;
  shape?: ShapeType;
}

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
      {(props.shape === undefined || props.shape === "default") && (
        <FaMapMarkerAlt size={props.size} color={color} />
      )}
    </Marker>
  );
};

export default React.memo(ExpansionMarker);
