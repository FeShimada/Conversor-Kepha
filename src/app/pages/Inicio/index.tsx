import styles from './Inicio.module.scss';

export const Inicio = () => {

    return (
        <section>
            <header className={styles.header}>
                <h1 className={styles.titulo}>Conversor de medidas</h1>
            </header>

            <div className={styles.container}>
                <ul className={styles.container__lista}>
                    <li><button className={styles.lista__item}>Litro</button></li>
                    <li><button className={styles.lista__item}>Metro</button></li>
                    <li><button className={styles.lista__item}>Quilo</button></li>
                    <li><button className={styles.lista__item}>Graus Celcius</button></li>
                </ul>
            </div>
        </section>
    )
}
