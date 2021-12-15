import * as React from "react";
import * as Types from "../../types";

type DataSourceArgumentType = {
  Type: "Query";
  DSAType: "VARCHAR2" | "NUMBER" | "TABLE";
  DSAName: string;
  DSATypeName: string;
  DSAMode: "IN" | "IN OUT";
  DSAValue: string;
};

export type BlockProps = {
  Name: string;
  DirtyInfo?: Types.TrueFalse;
  WhereClause?: string;
  NavigationStyle?: "Change Record" | "Same Record" | "Change Data Block";
  ScrollbarWidth?: string;
  QueryDataSourceName?: string;
  OrderByClause?: string;
  EnforcedPrimaryKey?: Types.TrueFalse;
  ScrollbarLength?: string;
  LockMode?: "Delayed";
  RecordVisualAttributeGroupName?: string;
  ScrollbarTabPageName?: string;
  PrecompSummary?: Types.TrueFalse;
  RecordsDisplayCount?: string;
  QueryAllRecords?: Types.TrueFalse;
  ScrollbarYPosition?: string;
  ShowScrollbar?: Types.TrueFalse;
  ScrollbarCanvasName?: string;
  ScrollbarXPosition?: string;
  UpdateChangedColumns?: Types.TrueFalse;
  InsertAllowed?: Types.TrueFalse;
  DeleteAllowed?: Types.TrueFalse;
  UpdateAllowed?: Types.TrueFalse;
  DatabaseBlock?: Types.TrueFalse;
  Alias?: string;
  MaximumRecordsFetched?: string;
  SingleRecord?: Types.TrueFalse;
  DMLDataName?: string;
  RecordOrientation?: "Vertical";
  DMLDataType?: "Table" | "Procedure" | "None";
  QueryDataSourceType?: "Table" | "Procedure" | "None";
  ScrollbarOrientation?: "Vertical" | "Horizontal";
  VisualAttributeName?: string;
  BackColor?: string;
  ForegroundColor?: string;
  NextNavigationBlockName?: string;
  IncludeRefitem?: Types.TrueFalse;
  RecordsFetchedCount?: string;
  RecordsBufferedCount?: string;
  QueryAllowed?: Types.TrueFalse;
  PreviousNavigationBlockName?: string;
  InsertProcedureName?: string;
  DataSourceArgument?: DataSourceArgumentType;
  KeyMode?: "Updateable";
};

const Block: React.FC<BlockProps> = (props: BlockProps) => {
  return <></>;
};

export default Block;
