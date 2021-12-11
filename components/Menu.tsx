import * as React from "react";
import * as Types from "../types";

export type MenuProps = {
  Name: string;
  TearOffMenu?: Types.TrueFalse;
};

const Menu: React.FC<MenuProps> = (props) => {
  return <>Menu</>;
};

export default Menu;
