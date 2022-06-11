import * as React from "react";
import * as Types from "../types";
import { Card } from "antd";

export type WindowProps = {
  Name: string;
  MoveAllowed?: Types.TrueFalse;
  MaximizeAllowed?: Types.TrueFalse;
  ClearAllowed?: Types.TrueFalse;
  MinimizeAllowed?: Types.TrueFalse;
  ResizeAllowed?: Types.TrueFalse;
  Modal?: Types.TrueFalse;
  DirtyInfo?: Types.TrueFalse;
  Width?: string;
  Height?: string;
  Title?: string;
  PrimaryCanvas?: string;
  YPosition?: string;
  XPosition?: string;
  HideOnExit?: Types.TrueFalse;
  InheritMenu?: Types.TrueFalse;
  ShowVerticalScrollbar?: Types.TrueFalse;
  ShowHorizontalScrollbar?: Types.TrueFalse;
  WindowStyle?: "Dialog" | "Document";
  VisualAttributeName?: string;
  MinimizeTitle?: string;
  VerticalToolbarCanvasName?: string;
};

const Window: React.FC<WindowProps> = (props) => {
  return <Card size="small" title={props.Title} style={{ width: 300 }}></Card>;
};

export default Window;
