import { useRecoilValue, useSetRecoilState } from "recoil"
import { IUnidades } from "../../../interfaces/IUnidades"
import { conversoesState, unidadeBaseState, valorState } from "../../../state/atom"
import { grausParaFahrenheit, grausParaKelvin, litrosParaGaloes, litrosParaOncas, metrosParaMilhas, metrosParaPes, obterId, quilosParaLibras, quilosParaOncas, valorFixo } from "../common/utils/utils"
import { Item } from "./Item"
import styles from './Historico.module.scss'
import { Outlet } from "react-router-dom"

export const Historico = () => {

    const setConvertido = useSetRecoilState<IUnidades[]>(conversoesState)
    const convertido = useRecoilValue<IUnidades[]>(conversoesState)

    const gravar = (event: React.FormEvent) => {
        event.preventDefault()
        setConvertido(unidades =>
            [
                ...unidades,
                {
                    unidadeBaseNome,
                    unidadeBaseValor,
                    transformacao1,
                    transformacao2,
                    transformacao1Nome,
                    transformacao2Nome,
                    id: obterId()
                }
            ]
        )
    }

    const unidadeBase = useRecoilValue(unidadeBaseState)
    const valor = useRecoilValue(valorState)
    let unidadeBaseNome = ''
    let unidadeBaseValor = 0
    let transformacao1 = 0
    let transformacao2 = 0
    let transformacao1Nome = ''
    let transformacao2Nome = ''

    if (unidadeBase === 'Graus Celcius') {
        unidadeBaseNome = 'Graus Celcius'
        unidadeBaseValor = valorFixo(valor)
        transformacao1 = grausParaKelvin(valor)
        transformacao2 = grausParaFahrenheit(valor)
        transformacao1Nome = 'Kelvin'
        transformacao2Nome = 'Fahrenheit'
    } else if (unidadeBase === 'Litro') {
        unidadeBaseNome = 'Litros'
        unidadeBaseValor = valorFixo(valor)
        transformacao1 = litrosParaOncas(valor)
        transformacao2 = litrosParaGaloes(valor)
        transformacao1Nome = 'Onças'
        transformacao2Nome = 'Galões'
    } else if (unidadeBase === 'Metro') {
        unidadeBaseNome = 'Metros'
        unidadeBaseValor = valorFixo(valor)
        transformacao1 = metrosParaMilhas(valor)
        transformacao2 = metrosParaPes(valor)
        transformacao1Nome = 'Milhas'
        transformacao2Nome = 'Pés'
    } else {
        unidadeBaseNome = 'Quilos'
        unidadeBaseValor = valorFixo(valor)
        transformacao1 = quilosParaLibras(valor)
        transformacao2 = quilosParaOncas(valor)
        transformacao1Nome = 'Libras'
        transformacao2Nome = 'Onças'
    }

    return (
        <>
            <div>
                <Outlet/>
            </div>

            <form onSubmit={gravar} className={styles.historico}>
                <button className={styles.historico__botao}>Gravar no histórico</button>
                <div className={styles.historico__item}>
                    {convertido.map(evento =>
                        <Item
                            evento={evento}
                            key={evento.id}
                            {...evento}
                        />
                    )}
                </div>
            </form>
        </>
    )
}
