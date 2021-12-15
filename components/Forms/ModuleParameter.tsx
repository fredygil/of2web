import * as React from "react";
import { useStoreActions } from "../../client/store";
import * as Types from "../../types/index";

export type ModuleParameterProps = {
  Name: string;
  DirtyInfo?: Types.TrueFalse;
  Comment?: string;
  ParameterDataType?: Types.DataType;
  ParameterInitializeValue?: string;
};

const ModuleParameter: React.FC<ModuleParameterProps> = (props) => {
  const { addParameter } = useStoreActions((actions) => actions.form);

  React.useEffect(() => {
    addParameter(props);
  }, []);

  return <></>;
};

export default ModuleParameter;
