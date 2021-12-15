import * as React from "react";
import * as Types from "../../types";

type DataSourceArgumentProps = {
  Type: "Query";
  DSAType: "TABLE" | "VARCHAR2" | "NUMBER";
  DSAName: string;
  DSATypeName: string;
  DSAMode: "IN" | "IN OUT";
  DSAValue: string;
};

const DataSourceArgument: React.FC<DataSourceArgumentProps> = (props) => {
  return <></>;
};

export default DataSourceArgument;
