import * as React from "react";
import * as Types from "../common/types";

type EditorProps = {
  Name: string;
  Width: string;
  Height: string;
  DirtyInfo?: Types.TrueFalse;
};

const Editor: React.FC<EditorProps> = (props: EditorProps) => {
  return <>Editor</>;
};

export default Editor;
