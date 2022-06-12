import * as React from "react";
import * as Types from "../../common/types";

export type LOVColumnMappingProps = {
  DirtyInfo?: Types.TrueFalse;
  Name: string;
  Title?: string;
  DisplayWidth: string;
  ReturnItem?: string;
};

const LOVColumnMapping: React.FC<LOVColumnMappingProps> = (props) => {
  return <>LOVColumnMapping</>;
};

export default LOVColumnMapping;
