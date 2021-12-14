import * as React from "react";
import { useStoreActions } from "../../client/store";
import * as Types from "../../types";

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
  const { addWindow } = useStoreActions((actions) => actions.form);

  React.useEffect(() => {
    addWindow(props);
  }, []);

  return <>Window</>;
};

export default Window;
