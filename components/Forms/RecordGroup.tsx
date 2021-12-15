import * as React from "react";
import * as Types from "../../types";

type RecordGroupProps = {
  Name: string;
  DirtyInfo?: Types.TrueFalse;
  RecordGroupQuery: string;
  RecordGroupFetchSize: string;
  RecordGroupType?: "Query";
  ColumnDataType?: Types.DataType;
};

const RecordGroup: React.FC<RecordGroupProps> = (props) => {
  return <></>;
};

export default RecordGroup;
