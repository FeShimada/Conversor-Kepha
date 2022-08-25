export const metrosParaMilhas = (comprimento: number) => {
    const milhasString = (comprimento / 1609).toFixed(2);
    const milhas = parseFloat(milhasString);

    return milhas;
};

export const metrosParaPes = (comprimento: number) => {
    const pesString = (comprimento * 3.281).toFixed(2);
    const pes = parseFloat(pesString);

    return pes;
};

export const litrosParaOncas = (volume: number) => {
    const oncasString = (volume * 33.814).toFixed(2);
    const oncas = parseFloat(oncasString);

    return oncas;
};

export const litrosParaGaloes = (volume: number) => {
    const galoesString = (volume / 3.785).toFixed(2);
    const galoes = parseFloat(galoesString);

    return galoes;
};

export const quilosParaLibras = (massa: number) => {
    const librasString = (massa * 2.205).toFixed(2);
    const libras = parseFloat(librasString);

    return libras;
};

export const quilosParaOncas = (massa: number) => {
    const oncasString = (massa * 35.274).toFixed(2);
    const oncas = parseFloat(oncasString);

    return oncas;
};

export const grausParaKelvin = (temperatura: number) => {
    const kelvin = temperatura + 273.15;
    return kelvin;
};

export const grausParaFahrenheit = (temperatura: number) => {
    const fahrenheit = (temperatura * 9/5) + 32;
    return fahrenheit;
};

export const valorFixo = (valor: number) => {
    const valorFixo = valor;
    return valorFixo;
};

let id = 0;

export const obterId = (): number => {
    return id++;
};
