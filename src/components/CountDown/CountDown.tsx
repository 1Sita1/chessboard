import { useState, useEffect } from "react"
import "./CountDown.css"

type CountDownProps = {
    callback: () => any
}

const CountDown: React.FC<CountDownProps> = ({
    callback
}: CountDownProps) => {
    const [displayedText, setDisplayedText] =
        useState<string>("3")

    useEffect(() => {
        setTimeout(() => {
            setDisplayedText((oldText) => {
                if (oldText == "1") {
                    callback()
                }
                return parseInt(oldText) - 1 + ""
            })
        }, 500)
    })

    return (
        <div className="board-countdown">
            <div className="shadow"></div>
            <h1 className="board-text">{displayedText}</h1>
        </div>
    )
}

export default CountDown
