import * as React from "react";
import * as Types from "../../types";

type DataSourceColumnProps = {
  Type: "Query";
  DSCType: Types.DataSourceType;
  DSCName: string;
  DSCNochildren?: Types.TrueFalse;
  DSCLength: string;
  DSCMandatory: Types.TrueFalse;
  DSCPrecision: string;
  DSCScale: string;
};

const DataSourceColumn: React.FC<DataSourceColumnProps> = (props) => {
  return <></>;
};

export default DataSourceColumn;
