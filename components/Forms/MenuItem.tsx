import * as React from "react";

export type MenuItemProps = {
  Name: string;
  Label: string;
  MenuItemCode: string;
};

const MenuItem: React.FC<MenuItemProps> = (props) => {
  return <>MenuItem</>;
};

export default MenuItem;
