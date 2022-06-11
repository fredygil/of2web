import * as React from "react";
import * as Types from "../common/types";

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
  FontStyle?: Types.FontStyle;
};

const VisualAttribute: React.FC<VisualAttributeProps> = (props) => {
  return <>VisualAttribute</>;
};

export default VisualAttribute;
