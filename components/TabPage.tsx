import * as React from "react";
import * as Types from "../types";

export interface TabPageProps extends Types.ComponentWithChildren {
  Name: string;
  Label?: string;
  DirtyInfo?: Types.TrueFalse;
  Visible?: Types.TrueFalse;
  Enabled?: Types.TrueFalse;
};

const TabPage: React.FC<TabPageProps> = (props) => {
  return <>TabPage</>;
};

export default TabPage;
