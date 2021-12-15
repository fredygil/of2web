import * as React from "react";
import * as Types from "../../types/index";

export type VisualAttributeProps = {
  Name: string;
  BackColor?: string;
  ForegroundColor?: string;
  DirtyInfo?: Types.TrueFalse;
  FillPattern?: string;
  FontSpacing?: Types.FontSpacing;
  FontWeight?: Types.FontWeight;
  FontSize?: string;
  FontName?: string;
};

const VisualAttribute: React.FC<VisualAttributeProps> = (props) => {
  return <></>;
};

export default VisualAttribute;
