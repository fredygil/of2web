import * as React from "react";
import * as Types from "../common/types";

export type CoordinateProps = {
  CharacterCellWidth: string;
  DefaultFontScaling: Types.TrueFalse;
  CoordinateSystem: string;
  CharacterCellHeight: string;
  RealUnit: "Point" | "Pixel";
};

const Coordinate: React.FC<CoordinateProps> = (props) => {
  return <>Coordinate</>;
};

export default Coordinate;
