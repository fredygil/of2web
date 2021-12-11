import * as React from "react";
import { useStoreActions } from "../client/store";
import * as Types from "../types";

export type FormModuleProps = {
  Name: string;
  DirtyInfo: Types.TrueFalse;
  Title: string;
  MenuModule: string;
  ConsoleWindow: string;
  Comment?: string;
  InteractionMode?: "Non-Blocking" | "Blocking";
  FirstNavigationBlockName?: string;
  RuntimeComp?: string;
  RecordVisualAttributeGroupName?: string;
  InitializeMenu?: string;
  NewdeferReqEnf?: string;
  ValidationUnit?: string;
  HorizontalToolbarCanvas?: string;
  Use3dControls?: Types.TrueFalse;
  IsolationMode?: "Read Committed";
  MaximumRecordsFetched?: string;
};

const FormModule: React.FC<FormModuleProps> = (props) => {
  const { useEffect } = React;
  const { setFormConfig } = useStoreActions((actions) => actions.form);

  useEffect(() => {
    const { children, ...config } = props;
    setFormConfig(config);
  }, []);

  return <>{props.children}</>;
};

export default FormModule;
