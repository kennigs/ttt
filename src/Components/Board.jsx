import { useState } from "react"
import { Square } from "./Square"
import { Wins } from "../Constants/Wins"


export const Board = ()=> {
    
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isNextX, setIsNextX] = useState(true)

    let isWinner = false
    let winner = null
    let info = `Next - ${(isNextX) ? 'x' : 'o'}`

    const checkWinner = ()=> {
            for(let combination of Wins){
                let [a, b ,c] = combination
                if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
                    isWinner = true
                    return squares[a]
                }
            }
            return null
    }
    const setSquaresValue = (i)=> {
        if(isWinner){
            window.location.reload()
            return
        }
        if(squares[i]) return null
        let newSquares = squares.slice()
        newSquares[i] = (isNextX) ? 'x' : 'o'
        setIsNextX(!isNextX)
        setSquares(newSquares)
    }
    winner = checkWinner()
    if(winner) info = `Winner - ${winner}`
    return (
        <>
        <div>
            <h1>{info}</h1>
            {squares.map((squares,i)=> {
                return(
                <span key={i}>
                    <Square value = {squares} setSquareValue={()=> setSquaresValue(i)} />
                        {(i === 2 || i === 5) && <br />}
                </span>
            )})}
        </div>
        </>
    )
}