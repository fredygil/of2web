import * as React from "react";
import * as Types from "../types";

type CanvasProps = {
  Name: string;
  ViewportHeight: string;
  ViewportWidth: string;
  CanvasType?: "Tab" | "Stacked" | "Content";
  DirtyInfo?: Types.TrueFalse;
  Width: string;
  Height: string;
  WindowName: string;
  ViewportXPositionOnCanvas?: string;
  ViewportYPositionOnCanvas?: string;
};

const Canvas: React.FC<CanvasProps> = (props) => {
  return <>Canvas</>;
};

export default Canvas;
