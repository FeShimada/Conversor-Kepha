import { IUnidades } from "../../../../interfaces/IUnidades"

export const Item = ( {transformacao1, transformacao2}: IUnidades ) => {
    return (
        <li> {transformacao1} {transformacao2} </li>
    )
}
