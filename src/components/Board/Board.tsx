import React, {
    useState,
    useEffect,
    ReactElement
} from "react"
import Square from "../Square/Square"
import "./Board.css"

const Board: React.FC = () => {
    const [squares, setSquares] = useState<ReactElement[]>(
        []
    )

    useEffect(() => {
        const newSquares: ReactElement[] = []
        const darkColor = "#3c3c3c"
        const lightColor = "#358239"

        for (let i = 0; i < 64; i++) {
            newSquares.push(
                <Square
                    key={i}
                    color={
                        (Math.floor(i / 8) + i) % 2 === 0
                            ? lightColor
                            : darkColor
                    }
                    label={"random"}
                />
            )
        }

        setSquares(newSquares)
    }, [])

    return <section className="board">{squares}</section>
}

export default Board
