import * as React from "react";
import * as Types from "../../common/types";

export type ReportProps = {
  Name: string;
  Filename?: string;
  DirtyInfo?: Types.TrueFalse;
  ReportDestinationType?: "Screen" | "Cache";
  CommMode?: "Asynchronous";
  ExecuteMode?: "Runtime";
  ReportServer?: string;
  QueryName?: string;
  DataSourceBlock?: string;
};

const Report: React.FC<ReportProps> = (props) => {
  return <>Report</>;
};

export default Report;
