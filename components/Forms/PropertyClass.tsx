import * as React from "react";
import * as Types from "../../types";

type PropertyClassProps = {
  Name: string;
  DirtyInfo?: Types.TrueFalse;
  KeyboardNavigable?: Types.TrueFalse;
  MouseNavigate?: Types.TrueFalse;
  XPosition?: string;
  YPosition?: string;
  Width?: string;
  Height?: string;
  BackColor?: string;
  Label?: string;
  ItemType?: "Push Button";
  Iconic?: Types.TrueFalse;
  CanvasName?: string;
  DistanceBetweenRecords?: string;
};

const PropertyClass: React.FC<PropertyClassProps> = (props) => {
  return <></>;
};

export default PropertyClass;
