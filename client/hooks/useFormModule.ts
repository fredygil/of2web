import React, { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { formModuleStateAtom } from '../store/atoms/formModule';
import { useRecoilState } from "recoil";

export const useFormModule = () => {
    const [formModuleState, setFormModuleState] = useRecoilState(formModuleStateAtom);

    useEffect(() => {
        const uuid = uuidv4();
        setFormModuleState((currentState) => ({ ...currentState, id: uuid }));
    }, []);

    return {
        formModuleState
    };
};