/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { IConversor } from '../../../interfaces/IConversor';
import { IConversores } from '../../../interfaces/IConversores';
import { unidadeBaseState, valorState } from '../../../state/atom';
import styles from './Conversor.module.scss';

export const Conversor = ({ unidade, funcao }: IConversor) => {

    return (
        <li className={styles.lista__item}> <strong className={styles.lista__valor}> {funcao} </strong>  {unidade} </li> 
    );
};
    

export const Conversores = ( {children}: IConversores ) => {

    const state = useRecoilValue(valorState);
    const setState = useSetRecoilState(valorState);
    const unidadeBase = useRecoilValue(unidadeBaseState);

    const handleChange = (e: { target: { value: any; }; }) => {
        setState(Number(e.target.value) | 0);
    };

    return (  
  
        <div className={styles.container}>
            <h2 className={styles.container__titulo}>{unidadeBase}</h2>
            <input value={state} onChange={handleChange.bind(this)} className={styles.container__input} />
            <ul className={styles.container__lista}>
                {children.map((child: React.FunctionComponentElement<{ key: any; valor: number; }>, i: any) => 
                    React.cloneElement(child, { key: i, valor: state })
                )}
            </ul>
        </div>
    );
};           
