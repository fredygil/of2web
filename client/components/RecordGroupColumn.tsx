import * as React from "react";
import * as Types from "../../common/types";

type RecordGroupColumnProps = {
  Name: string;
  DirtyInfo?: Types.TrueFalse;
  ColumnDataType: Types.DataType;
  DataLengthSemantics?: "BYTE" | "Null";
  MaximumLength: string;
};

const RecordGroupColumn: React.FC<RecordGroupColumnProps> = (props) => {
  return <>RecordGroupColumn</>;
};

export default RecordGroupColumn;
