import * as React from "react";
import * as Types from "../types";

export type ReportProps = {
  Name: string;
  Filename?: string;
  DirtyInfo?: Types.TrueFalse;
  ReportDestinationType?: "Screen" | "Cache";
  CommMode?: "Asynchronous";
  ExecuteMode?: "Runtime";
  ReportServer?: string;
};

const Report: React.FC<ReportProps> = (props) => {
  return <>Report</>;
};

export default Report;
