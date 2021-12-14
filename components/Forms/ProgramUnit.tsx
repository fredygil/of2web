import * as React from "react";

type ProgramUnitProps = {
  Name: string;
  ProgramUnitType?: "Package Spec" | "Function" | "Package Body" | "Procedure";
  ProgramUnitText: string;
};

const ProgramUnit = (props: ProgramUnitProps) => {
  return <>ProgramUnit</>;
};

export default ProgramUnit;
