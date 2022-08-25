import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { unidadeBaseState, valorState } from '../../../state/atom';
import { grausParaFahrenheit, grausParaKelvin } from '../../components/common/utils/utils';
import { Conversor, Conversores } from '../../components/Conversor/Conversor';

export const GrausCelcius = () => {

    const valor = useRecoilValue(valorState);
    const kelvin = grausParaKelvin(valor);
    const fahrenheit = grausParaFahrenheit(valor);

    const setUnidadeBase = useSetRecoilState(unidadeBaseState);
    const unidadeBase = useRecoilValue(unidadeBaseState);
    useEffect(() => {
        setUnidadeBase('Graus Celcius');
    }, [setUnidadeBase]); 

    return (
        <section>
            <Conversores unidadeBase={unidadeBase}>
                <Conversor unidade='Kelvin' funcao={kelvin} />
                <Conversor unidade='Fahrenheit' funcao={fahrenheit} />
            </Conversores>
        </section>
    );
};
