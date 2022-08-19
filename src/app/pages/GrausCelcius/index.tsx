import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { unidadeBaseState, valorState } from '../../../state/atom';
import { grausParaFahrenheit, grausParaKelvin } from '../../components/common/utils/conversores';
import { Conversor, Conversores } from '../../components/Conversor/Conversor';

export const GrausCelcius = () => {

    const valor = useRecoilValue(valorState)

    const transformacao1 = grausParaKelvin(valor)
    const transformacao2 = grausParaFahrenheit(valor)

    const setUnidadeBase = useSetRecoilState(unidadeBaseState)
    const unidadeBase = useRecoilValue(unidadeBaseState)
    useEffect(() => {
        setUnidadeBase('Graus Celcius')
    }, [setUnidadeBase])

    return (
        <section>
            <Conversores unidadeBase={unidadeBase}>
                <Conversor unidade='Kelvin' funcao={transformacao1} />
                <Conversor unidade='Fahrenheit' funcao={transformacao2} />
            </Conversores>
        </section>
    )
}


