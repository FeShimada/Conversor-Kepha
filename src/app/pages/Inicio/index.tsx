// import { ConversorPesquisa } from '../../components/Conversor/ConversorPesquisa';
import { Converter, Converters } from '../../components/Conversor/ConversorPesquisa';
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

            {/* <ConversorPesquisa></ConversorPesquisa> */}

            <Converters baseUnits='feet'>
                <Converter unit='inches' fn={(val: number) => val * 12} value={0} />
                <Converter unit='cm' fn={(val: number) => val * 12 * 2.54} value={0} />
                <Converter unit='miles' fn={(val: number) => val / 5280} value={0} />
            </Converters>

        </section>
    )
}
