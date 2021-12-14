import * as React from "react";
import * as Types from "../../types";

export type TextSegmentProps = {
  Name: string;
  FontWeight?: Types.FontWeight;
  FontStyle?: Types.FontStyle;
  FontSpacing?: "Normal";
  FontSize?: string;
  FontName?: string;
  ForegroundColor: string;
  DirtyInfo?: Types.TrueFalse;
  Text: string;
};

const TextSegment: React.FC<TextSegmentProps> = (props: TextSegmentProps) => {
  return <>TextSegment</>;
};

export default TextSegment;
