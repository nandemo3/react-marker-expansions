import { MarkerProps } from "react-map-gl";

type VariantProps = "default" | "circle" | "square";
type ImageExpand = "jpg" | "png" | "svg" | "gif";

export interface ExpansionMarkerProps extends MarkerProps {
  size: number;
  variant?: VariantProps;
  imageExpand?: ImageExpand;
}

declare const _default: React.ComponentType<ExpansionMarkerProps>;
export default _default;
