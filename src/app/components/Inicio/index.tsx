import { Link } from 'react-router-dom';
import styles from './Inicio.module.scss';

export const Inicio = () => {

    return (
        <section>
            <header className={styles.header}>
                <h1 className={styles.titulo}>Conversor de medidas</h1>
            </header>

            <div className={styles.container}>
                <ul className={styles.container__lista}>
                    <li><button className={styles.lista__item}><Link className={styles.lista__link} to={'/litro'}>Litro</Link></button></li>
                    <li><button className={styles.lista__item}><Link className={styles.lista__link} to={'/metro'}>Metro</Link></button></li>
                    <li><button className={styles.lista__item}><Link className={styles.lista__link} to={'/quilo'}>Quilo</Link></button></li>
                    <li><button className={styles.lista__item}><Link className={styles.lista__link} to={'/graus-celcius'}>Graus Celcius</Link></button></li>
                </ul>
            </div>
        </section>
    )
}