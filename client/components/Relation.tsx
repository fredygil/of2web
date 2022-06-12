import * as React from "react";
import * as Types from "../../common/types";

type RelationProps = {
  Name: string;
  DeleteRecord: "Cascading" | "Isolated" | "Non Isolated";
  Deferred: Types.TrueFalse;
  DirtyInfo?: Types.TrueFalse;
  JoinCondition: string;
  DetailBlock: string;
  RelationType?: string;
  AutoQuery: Types.TrueFalse;
  PreventMasterlessOperations: Types.TrueFalse;
};

const Relation: React.FC<RelationProps> = (props) => {
  return <>Relation</>;
};

export default Relation;
