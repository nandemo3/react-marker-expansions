import React from "react";
import { MarkerProps } from "react-map-gl";

type ShapeType = "default" | "circle" | "square" | "none";

export interface ExpansionMarkerProps extends MarkerProps {
  size: number;
  shape?: ShapeType;
}

declare const _default: React.ComponentType;
export default _default;
