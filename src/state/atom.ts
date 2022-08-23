import { atom } from "recoil";
import { IUnidades } from "../interfaces/IUnidades";

export const valorState = atom({
    key: 'valorState',
    default: 0
}) 

export const unidadeBaseState = atom({
    key: 'unidadeBaseState',
    default: ''
})

export const conversoesState = atom<IUnidades[]>({
    key: 'conversoesState',
    default: []
})
