import * as React from "react";
import * as Types from "../../types";

export type TabPageProps = {
  Name: string;
  Label?: string;
  DirtyInfo?: Types.TrueFalse;
  Visible?: Types.TrueFalse;
};

const TabPage: React.FC<TabPageProps> = (props) => {
  return <>TabPage</>;
};

export default TabPage;
