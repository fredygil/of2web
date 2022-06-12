import * as React from "react";
import * as Types from "../common/types";

type DataSourceArgumentProps = {
  Type: "Query";
  DSAType: "TABLE" | "VARCHAR2" | "NUMBER";
  DSAName: string;
  DSATypeName: string;
  DSAMode: "IN" | "IN OUT";
  DSAValue: string;
};

const DataSourceArgument: React.FC<DataSourceArgumentProps> = (props) => {
  return <>DataSourceArgument</>;
};

export default DataSourceArgument;
