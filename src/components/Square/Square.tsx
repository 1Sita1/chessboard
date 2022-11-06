import { ReactElement, ReactNode } from "react"
import "./Square.css"

type SquareProps = {
    color: string
    label: string
}

const Square = ({ color, label }: SquareProps) => {
    return (
        <div
            className="square"
            style={{ backgroundColor: color }}
        ></div>
    )
}

export default Square
