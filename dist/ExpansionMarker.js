"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_map_gl_1 = require("react-map-gl");
const fa_1 = require("react-icons/fa");
const ExpansionMarker = (props) => {
    const color = props.color || "black";
    return (react_1.default.createElement(react_map_gl_1.Marker, Object.assign({}, props, { style: {
            position: "absolute",
            left: "0px",
            top: "0px",
            cursor: "pointer",
            stroke: "none",
        } }),
        props.shape === "square" && react_1.default.createElement(fa_1.FaSquare, { size: props.size, color: color }),
        props.shape === "circle" && react_1.default.createElement(fa_1.FaCircle, { size: props.size, color: color }),
        (props.shape === undefined || props.shape === "default") && (react_1.default.createElement(fa_1.FaMapMarkerAlt, { size: props.size, color: color }))));
};
exports.default = react_1.default.memo(ExpansionMarker);
