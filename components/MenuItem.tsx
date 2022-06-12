import * as React from "react";
import * as Types from "../common/types";

interface MenuItemProps extends Types.ComponentWithChildren {
  Name: string;
  Label: string;
  MenuItemCode?: string;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  return <>MenuItem</>;
};

export default MenuItem;
