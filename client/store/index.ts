import { createStore, createTypedHooks } from "easy-peasy";
import { rootModel, RootModel } from "./models/rootModel";

export const store = createStore<RootModel>(rootModel);

export const { useStore, useStoreActions, useStoreDispatch, useStoreState } =
    createTypedHooks<RootModel>();
