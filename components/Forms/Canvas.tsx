import * as React from "react";
import { useStoreActions } from "../../client/store";
import * as Types from "../../types";

export type CanvasProps = {
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
} & Types.FontType;

const Canvas: React.FC<CanvasProps> = (props) => {
  const { addCanvas } = useStoreActions((actions) => actions.form);

  React.useEffect(() => {
    const { children, ...canvasProps } = props;
    addCanvas(canvasProps);
  }, []);

  const css = `
      div {
        border: 1px solid gray;
        background-color: white;
        width: ${props.Width}px;
        height: ${props.Height}px;
        transform: scale(1.41);
      }
    `;

  if ((props?.Visible || "True") === "True") {
    return (
      <>
        <div id="canvas" className="canvas">
          <style jsx>{css}</style>
        </div>
      </>
    );
  }

  return <></>;
};

export default Canvas;
