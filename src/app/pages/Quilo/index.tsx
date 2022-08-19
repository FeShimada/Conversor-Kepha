import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { unidadeBaseState, valorState } from '../../../state/atom';
import { quilosParaLibras, quilosParaOncas } from '../../components/common/utils/conversores';
import { Conversor, Conversores } from '../../components/Conversor/Conversor';

export const Quilo = () => {

    const valor = useRecoilValue(valorState)
    let libras = quilosParaLibras(valor)
    let oncas = quilosParaOncas(valor)

    const setUnidadeBase = useSetRecoilState(unidadeBaseState)
    const unidadeBase = useRecoilValue(unidadeBaseState)
    useEffect(() => {
        setUnidadeBase('Quilo')
    }, [setUnidadeBase])

    return (
        <section>

            <Conversores 
                unidadeBase={unidadeBase}
            >
                <Conversor unidade='Libras' funcao={libras} />
                <Conversor unidade='Onças' funcao={oncas} />
            </Conversores>

        </section>
    )
}
