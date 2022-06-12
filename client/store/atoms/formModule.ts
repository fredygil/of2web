import { atom } from 'recoil';

export type FormModuleStateType = {
    id?: string;
    name?: string;
};

export const defaultFormModuleState: FormModuleStateType = {
    id: undefined,
    name: undefined,
};

export const formModuleStateAtom = atom({
    key: 'formModuleState', // unique ID (with respect to other atoms/selectors)
    default: defaultFormModuleState, // default value (aka initial value)
});