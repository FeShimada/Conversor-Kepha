// import { useState } from "react";

import React from "react";
import { useState } from "react";


// export const ConversorPesquisa = () => {

//     const [valor, setValor] = useState(0);
//     const handleChange = (e: { target: { value: any; }; }) => {
//         setValor(Number(e.target.value) | 0)
//     }

//     return (
//         <input value={valor} onChange={handleChange} />
//     )
// }

interface Props {
    unit: string
    value: number
    fn: Function
}

interface PropsTwo {
    baseUnits: string
    children: any
}

export const Converter = ({ unit, value, fn}:Props) => <li> {fn(value)} {unit} </li>;

export const Converters = ( {baseUnits, children}: PropsTwo ) => {

    const [state, setState] = useState(0)

    const handleChange = (e: { target: { value: any; }; }) => {
        setState(Number(e.target.value) | 0)
    }
  return (  
     <div>
      <h1>
        <input value={state} onChange={handleChange.bind(this)} />
        {baseUnits}
      </h1>
      <ul>
        {children.map((child: React.FunctionComponentElement<{ key: any; value: number; }>, i: any) =>
          React.cloneElement(child, { key: i, value: state }))}
      </ul>
    </div>
  )
}
