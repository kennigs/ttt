import { useState } from "react"
import { BoardLayout } from "./BoardLayout"


export const Board = (isWinner, isNextX,setIsNextX)=> {
    const [button, setButton] = useState(Array(9).fill(null))
    const setButtonValue = (i)=> {
        if(isWinner) {
            window.location.reload()
            return
        }
        if(button[i]) {
            return
        }
        let newButton = button.slice()
        newButton[i] = (isNextX) ? 'x' : 'o'
        setIsNextX(!isNextX)
        setButton(newButton)
    }
    console.log(button)
    return (
        <>
        {button.map((button, i)=> {
            <span key={i}>
                <BoardLayout value = {button} setButtonValue={()=> {setButtonValue(i)}} />
            </span>
        })}
        </>
    )
}