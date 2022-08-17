

export const metrosParaMilhas = (comprimento: number) => {
    const milhas = comprimento / 1609;

    return milhas;
}

export const metrosParaPes = (comprimento: number) => {
    const pes = comprimento * 3.281;

    return pes;
}

export const litrosParaOncas = (volume: number) => {
    const oncas = volume * 33.814;
    return oncas;
}

export const litrosParaGaloes = (volume: number) => {
    const galoes = volume / 3.785;
    return galoes;
}

export const quilosParaLibras = (massa: number) => {
    const libras = massa * 2.205;
    return libras;
}

export const quilosParaOncas = (massa: number) => {
    const oncas = massa * 35.274;
    return oncas;
}

export const grausParaKelvin = (temperatura: number) => {
    const kelvin = temperatura + 273.15;
    return kelvin;
}

export const grausParaFahrenheit = (temperatura: number) => {
    const fahrenheit = (temperatura * 9/5) + 32;
    return fahrenheit;
}
