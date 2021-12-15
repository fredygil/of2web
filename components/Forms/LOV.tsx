import * as React from "react";
import * as Types from "../../types";

export type LOVProps = {
  Name: string;
  DirtyInfo?: Types.TrueFalse;
  Width?: string;
  RecordGroupName?: string;
  AutoColumnWidth?: Types.TrueFalse;
  Title?: string;
  AutoPosition?: Types.TrueFalse;
  Height?: string;
  FilterBeforeDisplay?: Types.TrueFalse;
  AutoRefresh?: Types.TrueFalse;
  AutoSkip?: Types.TrueFalse;
  AutoSelect?: Types.TrueFalse;
  AutoDisplay?: Types.TrueFalse;
  YPosition?: string;
  XPosition?: string;
  VisualAttributeName?: string;
};

const LOV: React.FC<LOVProps> = (props) => {
  return <></>;
};

export default LOV;
