import * as React from "react";
import * as Types from "../types";

export interface CanvasProps extends Types.ComponentWithChildren, Types.FontType {
  Name: string;
  ViewportHeight?: string;
  ViewportWidth?: string;
  CanvasType?: "Tab" | "Stacked" | "Content";
  DirtyInfo?: Types.TrueFalse;
  Width?: string;
  Height?: string;
  WindowName?: string;
  ViewportYPosition?: string;
  ViewportXPosition?: string;
  ViewportXPositionOnCanvas?: string;
  ViewportYPositionOnCanvas?: string;
  Bevel?: Types.BevelType;
  RaiseOnEnter?: Types.TrueFalse;
  BackColor?: string;
  ForegroundColor?: string;
  DisplayViewport?: Types.TrueFalse;
  ShowHorizontalScrollbar?: Types.TrueFalse;
  ShowVerticalScrollbar?: Types.TrueFalse;
  VisualAttributeName?: string;
  Visible?: Types.TrueFalse;
  TabAttachmentEdge?: Types.Alignment;
  TabStyle?: "Rounded" | "Chamfered";
  TabActionStyle?: string;
  TabWidthStyle?: string;
};

const Canvas: React.FC<CanvasProps> = (props) => {
  return <>Canvas</>;
};

export default Canvas;
