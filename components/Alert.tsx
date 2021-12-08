import * as React from "react";
import * as Types from "../types";

type AlertProps = {
  Name: string;
  DirtyInfo?: Types.TrueFalse;
  Button1Label?: string;
  Button2Label?: string;
  Title?: string;
  AlertMessage?: string;
  DefaultAlertButton?: "Button 1" | "Button 2";
  AlertStyle?: "Note" | "Stop" | "Caution";
  BackColor?: string;
};

const Alert: React.FC<AlertProps> = (props: AlertProps) => {
  return <>Alert</>;
};

export default Alert;
