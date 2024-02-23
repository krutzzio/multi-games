import { useEffect, useState } from "react"


export function Tiktaktoe() {

    const WINNER_COMBO = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    const [tablero, setTablero] = useState(Array(9).fill(""))
    const [turn, setTurn] = useState("X")
    const [winner, setWinner] = useState("")


    const handleClick = (ind) => {
        if (tablero[ind] !== "") {
            return
        } else {
            let newArr = [...tablero]
            newArr[ind] = turn
            setTablero(newArr)
            setTurn(turn === "X" ? "O" : "X")
        }
    }

    useEffect(() => {
        let c = WINNER_COMBO.find(combo => tablero[combo[0]] !== "" && tablero[combo[0]] === tablero[combo[1]] && tablero[combo[0]] === tablero[combo[2]]
        )
        console.log(c, turn)
        if (c) setWinner(turn === "X" ? "0" : "X")
    }, tablero)


    return (
        <div className="flex flex-col justify-center items-center h-full">
            <section className="flex flex-wrap  bg-white w-96 h-96 border-black border-8 rounded-lg overflow-hidden">
                {
                    tablero.map((celda, ind) => {
                        return (
                            <div key={ind} className=" flex justify-center items-center border-2 text-2xl w-1/3 h-1/3" onClick={() => handleClick(ind)}>{celda}</div>)
                    })
                }
            </section>
            <section>
                <h1>Turn {turn}</h1>
            </section>
            {
                winner
                    ? <h1>GUANYA {winner}</h1>
                    : <></>
            }
        </div>
    )
}
