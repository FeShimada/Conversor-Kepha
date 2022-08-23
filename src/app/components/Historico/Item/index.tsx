import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSetRecoilState } from "recoil"
import { IUnidades } from "../../../../interfaces/IUnidades"
import { conversoesState } from "../../../../state/atom"
import styles from './Item.module.scss'

export const Item: React.FC<{ evento: IUnidades }> = ({ evento } ) => {

    const setConversores = useSetRecoilState<IUnidades[]>(conversoesState)
    const excluir = () => {
        setConversores(unidadesAntigas => unidadesAntigas.filter(evt => evt.id !== evento.id))
    }

    return (
        <div className={styles.historico}>
            <div className={styles.historico__container}>
                <h2 className={styles.historico__titulo}> {evento.unidadeBaseValor} {evento.unidadeBaseNome} </h2>
                <FontAwesomeIcon onClick={excluir} icon={faTimesCircle} className={styles.historico__icone} />
            </div>

            <ul className={styles.historico__lista}>
                <li className={styles.historico__item}>
                    <strong className={styles.historico__valor}> {evento.transformacao1} </strong> {evento.transformacao1Nome}
                </li>
                <li className={styles.historico__item}>
                    <strong className={styles.historico__valor}> {evento.transformacao2} </strong> {evento.transformacao2Nome}
                </li>
            </ul>
        </div>
    )
}
