export type TrueFalse = "true" | "false";

export type DataType =
    "Integer" |
    "Money" |
    "Date" |
    "Number" |
    "Long" |
    "Char" |
    "Datetime";

export type Justification = "Left" | "Right" | "End" | "Center" | "Start";

export type Alignment = "Bottom" | "Start" | "End" | "Top" | "Center";

export type FontWeight = "Demilight" | "Extrabold" | "Bold" | "Medium";

export type FontStyle = "Italic" | "Underline" | "Plain";

export type Trigger = {
    Name: "WHEN-MOUSE-CLICK" | "WHEN-BUTTON-PRESSED" | "WHEN-RADIO-CHANGED" |
    "KEY-NEXT-ITEM" | "WHEN-TREE-NODE-SELECTED" | "KEY-PREV-ITEM" |
    "POST-CHANGE" | "WHEN-LIST-CHANGED" | "WHEN-MOUSE-DOUBLECLICK" |
    "WHEN-TREE-NODE-ACTIVATED" | "POST-TEXT-ITEM" | "PRE-TEXT-ITEM" |
    "WHEN-NEW-ITEM-INSTANCE" | "WHEN-CHECKBOX-CHANGED" | "WHEN-CUSTOM-ITEM-EVENT" |
    "KEY-NXTBLK" | "WHEN-VALIDATE-ITEM";
    TriggerText: string;
    DirtyInfo: TrueFalse;
    FireInQuery: TrueFalse;
};

export type BevelType = "None" | "Raised" | "Inset" | "Outset" | "Lowered" | "Plain";