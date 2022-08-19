import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { unidadeBaseState, valorState } from '../../../state/atom';
import { metrosParaMilhas, metrosParaPes } from '../../components/common/utils/conversores';
import { Conversor, Conversores } from '../../components/Conversor/Conversor';

export const Metro = () => {

    const valor = useRecoilValue(valorState)
    let milhas = metrosParaMilhas(valor)
    let pes = metrosParaPes(valor)

    const setUnidadeBase = useSetRecoilState(unidadeBaseState)
    const unidadeBase = useRecoilValue(unidadeBaseState)
    useEffect(() => {
        setUnidadeBase('Metro')
    }, [setUnidadeBase])
    
    return (
        <section>

            <Conversores 
                unidadeBase={unidadeBase}
            >
                <Conversor unidade='Milhas' funcao={milhas} />
                <Conversor unidade='Pés' funcao={pes} />
            </Conversores>

        </section>
    )
}
