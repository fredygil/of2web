import * as React from "react";
import * as Types from "../types";

export type CoordinateProps = {
  CharacterCellWidth: string;
  DefaultFontScaling: Types.TrueFalse;
  CoordinateSystem: string;
  CharacterCellHeight: string;
  RealUnit: "Point" | "Pixel";
};

const Coordinate = (props: CoordinateProps) => {
  return <>Coordinate</>;
};

export default Coordinate;
