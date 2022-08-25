import styles from './NotFound.module.scss';

export const NotFound = () => {

    return(
        <div className={styles.container}>
            <h2 className={styles.container__titulo}>404</h2>
            <p className={styles.container__texto}>Oops, página não encontrada</p>                  
        </div>
    );
};


