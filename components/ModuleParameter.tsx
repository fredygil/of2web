import * as React from "react";
import * as Types from "../types/index";

export type ModuleParameterProps = {
  Name: string;
  DirtyInfo?: Types.TrueFalse;
  Comment?: string;
  ParameterDataType?: Types.DataType;
  ParameterInitializeValue?: string;
};

const ModuleParameter: React.FC<ModuleParameterProps> = (props) => {
  return <>ModuleParameter</>;
};

export default ModuleParameter;
