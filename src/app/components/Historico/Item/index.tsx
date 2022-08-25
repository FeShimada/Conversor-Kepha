/* eslint-disable react/prop-types */
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSetRecoilState } from 'recoil';
import { IUnidades } from '../../../../interfaces/IUnidades';
import { conversoesState } from '../../../../state/atom';
import styles from './Item.module.scss';

export const Item: React.FC<{ evento: IUnidades }> = ({ evento } ) => {

    const setConversores = useSetRecoilState<IUnidades[]>(conversoesState);
    const excluir = () => {
        setConversores(unidadesAntigas => unidadesAntigas.filter(evt => evt.id !== evento.id));
    };

    return (
        <div className={styles.item}>
            <div className={styles.item__container}>
                <h2 className={styles.item__titulo}> {evento.unidadeBaseValor} {evento.unidadeBaseNome} </h2>
                <FontAwesomeIcon onClick={excluir} icon={faTimesCircle} className={styles.item__icone} />
            </div>

            <ul className={styles.item__lista}>
                <li className={styles.item__lista__item}>
                    <strong className={styles.item__valor}> {evento.transformacao1} </strong> {evento.transformacao1Nome}
                </li>
                <li className={styles.item__lista__item}>
                    <strong className={styles.item__valor}> {evento.transformacao2} </strong> {evento.transformacao2Nome}
                </li>
            </ul>
        </div>
    );
};
