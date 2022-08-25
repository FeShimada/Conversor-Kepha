import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { unidadeBaseState, valorState } from '../../../state/atom';
import { litrosParaGaloes, litrosParaOncas } from '../../components/common/utils/utils';
import { Conversor, Conversores } from '../../components/Conversor/Conversor';

export const Litro = () => {

    const valor = useRecoilValue(valorState);
    const oncas = litrosParaOncas(valor);
    const galoes = litrosParaGaloes(valor);

    const setUnidadeBase = useSetRecoilState(unidadeBaseState);
    const unidadeBase = useRecoilValue(unidadeBaseState);
    useEffect(() => {
        setUnidadeBase('Litro');
    }, [setUnidadeBase]);

    return (
        <section>

            <Conversores unidadeBase={unidadeBase}>
                <Conversor unidade='Onças' funcao={oncas} />
                <Conversor unidade='Galões' funcao={galoes} />
            </Conversores>

        </section>
    );
};
