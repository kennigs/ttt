import { useState } from "react"
import { Board } from "./Board/BOard"


export const Game = ()=> {
    const [isNextX, setIsNextX] = useState(true)
    const isWinner = false

    return (
        <>
            <Board isNextX={isNextX} setIsNextX={setIsNextX} isWinner={isWinner} />
        </>
    )
}