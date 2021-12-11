import { FormModel, formModel } from "./formModel";

export type RootModel = {
  form: FormModel;
};

export const rootModel: RootModel = {
  form: formModel,
};
