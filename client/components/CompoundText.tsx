import * as React from "react";
import * as Types from "../../common/types";

interface CompoundTextProps extends Types.ComponentWithChildren {
  Name: string;
}

const CompoundText: React.FC<CompoundTextProps> = (props) => {
  return <>CompoundText</>;
};

export default CompoundText;
