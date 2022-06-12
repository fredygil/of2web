import * as React from "react";
import * as Types from "../../common/types";

export type ItemType =
  | "OLE Container (Obsolete)"
  | "Push Button"
  | "List Item"
  | "Bean Area"
  | "Text Item"
  | "Radio Group"
  | "Image"
  | "Display Item"
  | "Hierarchical Tree"
  | "Check Box";

export type ListItemElementType = {
  Index: string;
  Name: string;
  Value: string;
};

export interface ItemProps extends Types.ComponentWithChildren {
  Name: string;
  MaximumLength?: string;
  UpdateAllowed?: Types.TrueFalse;
  InitializeValue?: string;
  ItemType?: ItemType;
  Prompt?: string;
  DirtyInfo?: Types.TrueFalse;
  ColumnName?: string;
  Width?: string;
  PrimaryKey?: Types.TrueFalse;
  DataLengthSemantics?: "BYTE" | "CHAR" | "Null";
  Height?: string;
  Required?: Types.TrueFalse;
  Enabled?: Types.TrueFalse;
  YPosition?: string;
  XPosition?: string;
  DataType?: Types.DataType;
  TabPageName?: string;
  PromptAttachmentOffset?: string;
  PromptAlignOffset?: string;
  CanvasName?: string;
  Justification?: Types.Justification;
  ItemsDisplay?: string;
  DistanceBetweenRecords?: string;
  FontWeight?: Types.FontWeight;
  FontStyle?: Types.FontStyle;
  FontSpacing?: "Normal";
  FontSize?: string;
  FontName?: string;
  PromptFontName?: string;
  FormatMask?: string;
  PromptFontSize?: string;
  PromptDisplayStyle?: "First Record" | "Hidden" | "All Records";
  PromptFontSpacing?: string;
  PromptFontWeight?: Types.FontWeight;
  PromptFontStyle?: Types.FontStyle;
  ListElementCount?: string;
  ListItemElement?: ListItemElementType;
  ValidateFromList?: Types.TrueFalse;
  DatabaseItem?: Types.TrueFalse;
  InsertAllowed?: Types.TrueFalse;
  LovName?: string;
  BackColor?: string;
  ForegroundColor?: string;
  MultiLine?: Types.TrueFalse;
  Label?: string;
  CheckBoxOtherValues?: "Checked" | "Unchecked" | "Not Allowed";
  UncheckedValue?: string;
  CheckedValue?: string;
  PromptJustification?: Types.Justification;
  PromptAttachmentEdge?: Types.Alignment;
  PromptAlign?: Types.Alignment;
  CopyValueFromItem?: string;
  SummaryFunction?: "Count" | "Sum" | "None";
  SummaryItemName?: string;
  CalculateMode?: "Formula" | "Summary" | "None";
  SummaryBlockName?: string;
  MouseNavigate?: Types.TrueFalse;
  ImplementationClass?: string;
  Comment?: string;
  Visible?: Types.TrueFalse;
  UpdateIfNull?: Types.TrueFalse;
  Formula?: String;
  PromptForegroundColor?: string;
  Bevel?: Types.BevelType;
  OtherValues?: string;
  RecordGroupName?: string;
  TreeDataQuery?: string;
  FillPattern?: string;
  ShowVerticalScrollbar?: Types.TrueFalse;
  CaseInsensitiveQuery?: Types.TrueFalse;
  QueryLength?: string;
  Tooltip?: string;
  AutoHint?: Types.TrueFalse;
  CompressionQuality?: "None" | "Maximum";
  Hint?: string;
  ShowHorizontalScrollbar?: Types.TrueFalse;
  TooltipVisualAttributeGroup?: string;
  ImageFormat?: "BMP" | "JFIF";
  SizingStyle?: "Adjust" | "Crop";
  DisplayQuality?: "High";
  ConcealData?: Types.TrueFalse;
  RecordVisualAttributeGroupName?: string;
  EditYPosition?: string;
  EditXPosition?: string;
  FixedLength?: Types.TrueFalse;
  LovXPosition?: string;
  LowestAllowedValue?: string;
  LovYPosition?: string;
  AutoSkip?: Types.TrueFalse;
  KeyboardNavigable?: Types.TrueFalse;
  HighestAllowedValue?: string;
  Rendered?: Types.TrueFalse;
  QueryAllowed?: Types.TrueFalse;
  VisualAttributeName?: string;
  ListStyle?: "Tlist" | "Poplist" | "Combo Box";
  QueryOnly?: Types.TrueFalse;
  LockRecord?: Types.TrueFalse;
  PopupMenuName?: string;
  EditName?: string;
  CaseRestriction?: "Upper";
  SynchronizedItemName?: string;
  NextNavigationItemName?: string;
  DefaultButton?: Types.TrueFalse;
  KeepCursorPosition?: Types.TrueFalse;
  PreviousNavigationItemName?: string;
  AccessKey?: string;
  OlePopupMenuItems?: string;
  OleInPlaceAction?: Types.TrueFalse;
  OleClass?: string;
  OleTenantTypeAspect?: string;
  OleActionStyle?: string;
  IconFilename?: string;
  Iconic?: Types.TrueFalse;
  WrapStyle?: string;
  HelpBookTopic?: string;
  PromptReadingOrder?: "Default";
  ImageDepth?: "Original";
}

const Item: React.FC<ItemProps> = (props: ItemProps) => {
  return <>Item</>;
};

export default Item;
