import * as React from "react";
import * as Types from "../../types";

type ObjectGroupChildProps = {
  Name: string;
  DirtyInfo?: Types.TrueFalse;
  Type?: "Alert" | "Canvas" | "Window" | "Block";
};

const ObjectGroupChild: React.FC<ObjectGroupChildProps> = (props) => {
  return <>ObjectGroupChild</>;
};

export default ObjectGroupChild;
