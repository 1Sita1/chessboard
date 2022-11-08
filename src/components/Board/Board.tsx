import React, {
    useState,
    useEffect,
    ReactElement
} from "react"
import Square from "../Square/Square"
import "./Board.css"

type BoardProps = {}

const Board: React.FC<BoardProps> = () => {
    const [squares, setSquares] = useState<ReactElement[]>(
        []
    )

    useEffect(() => {
        const newSquares: ReactElement[] = []
        const darkColor = "#000"
        const lightColor = "#fff"

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
