export type TrueFalse = "true" | "false";

export type DataType = "Integer" | "Money" | "Date" | "Number" |
    "Long" | "Char" | "Datetime" | "Character";

export type DataSourceType = "NUMBER" | "CHAR" | "VARCHAR2" | "LONG" |
    "DATE" | "MLSLABEL" | "LONG RAW" | "BLOB";

export type Alignment = "Bottom" | "Start" | "End" | "Top" | "Center" | "Left" | "Right";

export type Justification = Alignment

export type FontWeight = "Demilight" | "Extrabold" | "Bold" | "Medium" | "Ultralight" | "Demibold" | "Demilight";

export type FontStyle = "Italic" | "Underline" | "Plain";

export type FontSpacing = "Normal";

export type TriggerName =
    "WHEN-MOUSE-CLICK" | "WHEN-BUTTON-PRESSED" | "WHEN-RADIO-CHANGED" |
    "KEY-NEXT-ITEM" | "WHEN-TREE-NODE-SELECTED" | "KEY-PREV-ITEM" |
    "POST-CHANGE" | "WHEN-LIST-CHANGED" | "WHEN-MOUSE-DOUBLECLICK" |
    "WHEN-TREE-NODE-ACTIVATED" | "POST-TEXT-ITEM" | "PRE-TEXT-ITEM" |
    "WHEN-NEW-ITEM-INSTANCE" | "WHEN-CHECKBOX-CHANGED" | "WHEN-CUSTOM-ITEM-EVENT" |
    "KEY-NXTBLK" | "WHEN-VALIDATE-ITEM" | "KEY-CREREC" | "KEY-DELREC" |
    "PRE-QUERY" | "POST-RECORD" | "PRE-UPDATE" | "WHEN-NEW-FORM-INSTANCE" |
    "ON-CHECK-DELETE-MASTER" | "KEY-UP" | "KEY-SCRDOWN" | "POST-INSERT" |
    "KEY-NXTSET" | "PRE-DELETE" | "KEY-LISTVAL" | "WHEN-NEW-BLOCK-INSTANCE" |
    "KEY-DOWN" | "POST-CHANGE" | "WHEN-MOUSE-DOUBLECLICK" | "PRE-TEXT-ITEM" |
    "POST-TEXT-ITEM" | "PRE-INSERT" | "KEY-COMMIT" | "PRE-RECORD" |
    "WHEN-VALIDATE-RECORD" | "ON-COUNT" | "KEY-SCRUP" | "POST-QUERY" |
    "KEY-PRVREC" | "POST-UPDATE" | "KEY-NEXT-ITEM" | "ON-MESSAGE" |
    "WHEN-NEW-ITEM-INSTANCE" | "WHEN-CREATE-RECORD" | "POST-DELETE" |
    "WHEN-NEW-RECORD-INSTANCE" | "ON-POPULATE-DETAILS" | "KEY-PREV-ITEM" |
    "KEY-NXTREC" | "ON-DELETE" | "KEY-NXTBLK" | "WHEN-VALIDATE-ITEM" | "PRE-FORM" |
    "ON-CLEAR-DETAILS" | "WHEN-TIMER-EXPIRED" | "POST-FORMS-COMMIT" |
    "WHEN-WINDOW-CLOSED" | "ON-ERROR";

export type BevelType = "None" | "Raised" | "Inset" | "Outset" | "Lowered" | "Plain";

