import * as React from "react";
import * as Types from "../common/types";

interface GraphicsProps extends Types.ComponentWithChildren {
  Name: string;
  DirtyInfo?: Types.TrueFalse;
  ScrollbarWidth?: string;
  ScrollbarAlign?: Types.Alignment;
  VerticalMargin?: string;
  GraphicsType?:
    | "Frame"
    | "Rectangle"
    | "Line"
    | "Group"
    | "Text"
    | "Image"
    | "Rounded Rectangle";
  HorizontalMargin?: string;
  HorizontalObjectOffset?: string;
  GraphicsFontColorCode?: string;
  StartPromptOffset?: string;
  GraphicsFontColor?: string;
  HorizontalJustification?: Types.Justification;
  YPosition?: string;
  XPosition?: string;
  FillPattern?: "transparent" | "none";
  Bevel?: Types.BevelType;
  Width?: string;
  Height?: string;
  EdgePattern?: "none" | "solid";
  EdgeBackColor?: string;
  GraphicsText?: string;
  GraphicsFontName?: string;
  GraphicsFontWeight?: Types.FontWeight;
  GraphicsFontStyle?: string;
  GraphicsFontSize?: string;
  GraphicsFontSpacing?: "Normal" | "Ultradense";
  VerticalJustification?: Types.Justification;
  VerticalOrigin?: Types.Alignment;
  HorizontalOrigin?: Types.Justification;
  FontScaleable?: Types.TrueFalse;
  BoundingBoxScalable?: Types.TrueFalse;
  WrapText?: Types.TrueFalse;
  FixedBoundingBox?: Types.TrueFalse;
  InternalLineWidth?: string;
  BackColor?: string;
  InternalRotationAngle?: string;
  ForegroundColor?: string;
  LineSpacing?: "Single";
  CustomSpacing?: string;
  CapStyle?: "Butt";
  DashStyle?: "Solid" | "Dashed";
  EdgeForegroundColor?: string;
  LanguageDirection?: "Default";
  ArrowStyle?: "None";
  RecordsDisplayCount?: string;
  FrameTitleFontWeight?: Types.FontWeight;
  FrameTitleFontSpacing?: Types.FontSpacing;
  FrameTitleFontStyle?: Types.FontStyle;
  ShowScrollbar?: Types.TrueFalse;
  FrameTitleFontSize?: string;
  FrameTitleFontName?: string;
  UpdateLayout?: "Manually" | "Automatically" | "Locked";
  FrameTitleForegroundColor?: string;
  FrameTitleOffset?: string;
  FrameTitleAlign?: Types.Alignment;
  FrameTitle?: string;
  FrameTitleSpacing?: string;
  LayoutStyle?: "Tabular" | "Form";
  LayoutDataBlockName?: string;
  Shrinkwrap?: Types.TrueFalse;
  JoinStyle?: "Mitre" | "Bevel" | "Round";
  DistanceBetweenRecords?: string;
  ImageFilename?: string;
  ClipWidth?: string;
  ClipHeight?: string;
  CornerRadiusY?: string;
  CornerRadiusX?: string;
  StartPromptAlign?: Types.Alignment;
  SingleObjectAlign?: Types.Alignment;
  Dither?: Types.TrueFalse;
}

const Graphics: React.FC<GraphicsProps> = (props) => {
  return <>Graphics</>;
};

export default Graphics;
