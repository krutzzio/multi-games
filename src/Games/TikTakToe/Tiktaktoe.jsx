import { useEffect, useState } from "react"


export function Tiktaktoe() {

    const WINNER_COMBO = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    const [tablero, setTablero] = useState(Array(9).fill(""))
    const [turn, setTurn] = useState("X")
    const [winner, setWinner] = useState("")

    const handleClick = (ind) => {
        if (tablero[ind] !== "" || winner !== "") {
            return
        } else {
            let newArr = [...tablero]
            newArr[ind] = turn
            setTablero(newArr)
            setTurn(turn === "X" ? "O" : "X")
        }
    }

    const reset = () => {
        setTablero(Array(9).fill(""))
        setTurn(winner === "X" ? "O" : "X")
        setWinner("")
    }

    useEffect(() => {
        let c = WINNER_COMBO.find(combo => tablero[combo[0]] !== "" && tablero[combo[0]] === tablero[combo[1]] && tablero[combo[0]] === tablero[combo[2]])
        if (c) setWinner(turn === "X" ? "0" : "X")
    }, tablero)

    return (
        <div className="flex justify-evenly items-center h-full">
            <section className="text-4xl w-1/3 text-center">
                {
                    winner
                        ? <h1 >GUANYA {winner}</h1>
                        : (<section className="flex flex-col justify-center items-center gap-8">
                            <h1 className="">Turn</h1>
                            <article className="border-4 border-black flex justify-between items-center p-4 w-40 rounded-lg">
                                <div className={`${turn === "X" && `border-2 border-black`} rounded p-2`}>X</div>
                                <div className={`${turn === "O" && `border-2 border-black`} rounded p-2`}>O</div>
                            </article>
                        </section>)
                }
            </section>
            <section className="flex flex-wrap bg-white w-96 h-96 border-black border-8 rounded-lg overflow-hidden">
                {
                    tablero.map((celda, ind) => {
                        return (
                            <div key={ind} className="flex justify-center items-center border-2 text-2xl w-1/3 h-1/3" onClick={() => handleClick(ind)}>{celda}</div>)
                    })
                }
            </section>
            <section className="w-1/3 text-center">
                <button onClick={reset}>Reset</button>
            </section>

        </div>
    )
}
