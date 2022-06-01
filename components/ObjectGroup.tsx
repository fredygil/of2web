import * as React from "react";
import * as Types from "../types";

interface ObjectGroupProps extends Types.ComponentWithChildren {
  Name: string;
  DirtyInfo?: Types.TrueFalse;
  ObjectGroupType?: string;
  Comment?: string;
};

const ObjectGroup: React.FC<ObjectGroupProps> = (props) => {
  return <>ObjectGroup</>;
};

export default ObjectGroup;
