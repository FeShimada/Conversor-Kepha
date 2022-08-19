import { useState } from "react"
import { useRecoilValue } from "recoil"
import { IConversores } from "../../../interfaces/IConversores"
import { IUnidades } from "../../../interfaces/IUnidades"
import { valorState } from "../../../state/atom"
import { grausParaFahrenheit, grausParaKelvin, litrosParaGaloes, litrosParaOncas, metrosParaMilhas, metrosParaPes, quilosParaLibras, quilosParaOncas } from "../common/utils/conversores"
import { Item } from "./Item"

export const Historico = ( {unidadeBase}: IConversores ) => {

    const [convertido, setConvertido] = useState<IUnidades[]>([])

    const gravar = (evento: React.FormEvent) => {
        evento.preventDefault()
        setConvertido(unidades => 
                [
                    ...unidades,
                    {
                        transformacao1,
                        transformacao2
                    }
                ]
            )
    }

    const valor = useRecoilValue(valorState)
    let transformacao1 = grausParaKelvin(valor)
    let transformacao2 = grausParaFahrenheit(valor)


    if (unidadeBase === 'Graus Celcius') {
        transformacao1 = grausParaKelvin(valor)
        transformacao2 = grausParaFahrenheit(valor)
    } else if (unidadeBase === 'Litro') {
        transformacao1 = litrosParaOncas(valor)
        transformacao2 = litrosParaGaloes(valor)
    } else if (unidadeBase === 'Metro') {
        transformacao1 = metrosParaMilhas(valor)
        transformacao2 = metrosParaPes(valor)
    } else {
        transformacao1 = quilosParaLibras(valor)
        transformacao2 = quilosParaOncas(valor)
    }

    return (
        <form onSubmit={gravar}>
            <button>Gravar no histórico</button>
            <ul>
                {convertido.map((item, index) =>
                (
                    <Item
                        key={index}
                        {...item}
                    />
                )
                )}
            </ul>
        </form>
    )
}
