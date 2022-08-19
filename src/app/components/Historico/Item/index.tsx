import { useRecoilValue } from "recoil"
import { IUnidades } from "../../../../interfaces/IUnidades"
import { unidadeBaseState } from "../../../../state/atom"
import styles from './Item.module.scss'

export const Item = ( {transformacao1, transformacao2}: IUnidades ) => {

    const unidadeBase = useRecoilValue(unidadeBaseState)

    return (
        <ul className={styles.historico__lista__item}>
            <li className={styles.historico__item}> {transformacao1}  </li>
            <li className={styles.historico__item}> {transformacao2}  </li>
        </ul>
    )
}
