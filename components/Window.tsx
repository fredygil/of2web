import * as React from "react";
import * as Types from "../common/types";
import { Card } from "antd";
import { blue } from "@ant-design/colors";

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
  const headStyle = {
    backgroundColor: blue.primary,
    color: "white",
    margin: 0,
    padding: 0,
    paddingLeft: "10px",
    lineHeight: "1rem",
  };

  const bodyStyle = { width: "100%", height: "100%" };

  return (
    <>
      <div id={props.Name} className="window">
        <style jsx>{`
          div#${props.Name} {
            width: ${props.Width}px;
            height: ${props.Height}px;
            border: 1px solid black;
          }
        `}</style>
        <Card title={props.Title} bodyStyle={bodyStyle} headStyle={headStyle}>
          This is a card This is another card. Lorem ipsumnex
        </Card>
      </div>
    </>
  );
};

export default Window;
