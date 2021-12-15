import * as React from "react";
import * as Types from "../../types";

export type RadioButtonProps = {
  Name: string;
  DirtyInfo?: Types.TrueFalse;
  BackColor?: string;
  Label: string;
  XPosition: string;
  YPosition: string;
  Width: string;
  Height: string;
  RadioButtonValue: string;
  Prompt?: string;
  PromptAttachmentOffset?: string;
  PromptAlignOffset?: string;
  Visible?: Types.TrueFalse;
  ForegroundColor?: string;
  FontWeight?: Types.FontWeight;
  FontStyle?: Types.FontStyle;
  FontSpacing?: Types.FontSpacing;
  FontSize?: string;
  FontName?: string;
};

const RadioButton: React.FC<RadioButtonProps> = (props) => {
  return <></>;
};

export default RadioButton;
