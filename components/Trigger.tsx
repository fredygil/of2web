import * as React from "react";
import * as Types from "../types";

export type TriggerProps = {
  Name: Types.TriggerName;
  TriggerText: string;
  DirtyInfo?: Types.TrueFalse;
};

const Trigger: React.FC<TriggerProps> = (props) => {
  return <>Trigger</>;
};

export default Trigger;
