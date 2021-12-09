import * as React from "react";
import * as Types from "../types";

export type ReportProps = {
  Name: string;
  Filename?: string;
  DirtyInfo?: Types.TrueFalse;
};

const Report: React.FC<ReportProps> = (props) => {
  return <>Report</>;
};

export default Report;
