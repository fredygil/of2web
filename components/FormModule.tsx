import * as React from "react";
import * as Types from "../types";

export type FormModuleProps = {
  Name: string;
  DirtyInfo: Types.TrueFalse;
  Title: string;
  MenuModule: string;
  ConsoleWindow: string;
  Comment: string;
  InteractionMode: "Non-Blocking" | "Blocking";
  FirstNavigationBlockName: string;
};

const FormModule: React.FC<FormModuleProps> = (props) => {
  return <>FormModule</>;
};

export default FormModule;
