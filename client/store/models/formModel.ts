import { Action, action } from "easy-peasy";
import { WindowProps } from "../../../components/Window";
import { CanvasProps } from "../../../components/Canvas";
import { ModuleParameterProps } from "../../../components/ModuleParameter";
import { FormModuleProps } from '../../../components/FormModule';

export type FormModel = {
  config: FormModuleProps;
  windows: Array<WindowProps>;
  canvases: Array<WindowProps>;
  parameters: Array<ModuleParameterProps>;

  setFormConfig: Action<FormModel, any>;
  addWindow: Action<FormModel, WindowProps>;
  addCanvas: Action<FormModel, CanvasProps>;
  addParameter: Action<FormModel, ModuleParameterProps>;
};

export const formModel: FormModel = {
  config: undefined as any,
  windows: [],
  canvases: [],
  parameters: [],

  setFormConfig: action((state, form) => {
    state.config = form;
  }),

  addWindow: action((state, newWindow) => {
    // Search current Windows
    const index = state.windows.findIndex(window => window.Name === newWindow.Name);
    if (index > 0) {
      state.windows = [...state.windows.slice(0, index), newWindow, ...state.windows.slice(index)];
    } else {
      state.windows.push(newWindow);
    }
  }),

  addCanvas: action((state, newCanvas) => {
    // Search current Canvases
    const index = state.canvases.findIndex(canvas => canvas.Name === newCanvas.Name);
    if (index > 0) {
      state.canvases = [...state.canvases.slice(0, index), newCanvas, ...state.canvases.slice(index)];
    } else {
      state.canvases.push(newCanvas);
    }
  }),

  addParameter: action((state, newParameter) => {
    // Search current Parameters
    const index = state.parameters.findIndex(parameter => parameter.Name === newParameter.Name);
    if (index > 0) {
      state.parameters = [...state.parameters.slice(0, index), newParameter, ...state.parameters.slice(index)];
    } else {
      state.parameters.push(newParameter);
    }
  }),


};
