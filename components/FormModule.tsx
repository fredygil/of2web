import * as React from "react";
import * as Types from "../common/types";

export type FormModuleProps = {
  children?: React.ReactNode;
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
  return <>{props.children}</>;
};

export default FormModule;
