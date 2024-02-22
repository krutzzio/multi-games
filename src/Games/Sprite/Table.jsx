import { Cell } from "./Cell";

export function Table({ canvas, click, mida }) {


    const arrayGrande = new Array(mida*mida).fill("Hola")

    const tablero = {
        "display": "grid",
        "gridTemplateColumns": `repeat(${mida}, 1fr)`,
    }


    return (
        <div style={tablero} className="w-fit border-4 border-black">
            {
                arrayGrande.map((color, i) => {
                    return (
                        <Cell key={i} canvas={canvas} pos={i} click={click}/>
                    )
                })

            }
        </div>

    )
}