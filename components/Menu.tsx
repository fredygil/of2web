import * as React from "react";
import * as Types from "../types";

export interface MenuProps extends Types.ComponentWithChildren {
  Name: string;
  TearOffMenu?: Types.TrueFalse;
};

const Menu: React.FC<MenuProps> = (props) => {
  return <>Menu</>;
};

export default Menu;
