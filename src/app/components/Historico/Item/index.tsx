import { IUnidades } from "../../../../interfaces/IUnidades"
import styles from './Item.module.scss'

export const Item = ( {
    transformacao1,
    transformacao2,
    unidadeBaseNome, 
    unidadeBaseValor,
    transformacao1Nome,
    transformacao2Nome
}: IUnidades ) => {

    return (
        <ul className={styles.historico__lista__item}>

            <li className={styles.historico__titulo}> {unidadeBaseValor} {unidadeBaseNome} </li>

            <li className={styles.historico__item}>  
                <strong className={styles.historico__valor}> {transformacao1} </strong> {transformacao1Nome} 
            </li>
            <li className={styles.historico__item}> 
                <strong className={styles.historico__valor}> {transformacao2} </strong> {transformacao2Nome} 
            </li>
        </ul>
    )
}
