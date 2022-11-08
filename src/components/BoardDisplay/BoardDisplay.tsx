import { setConstantValue } from "typescript"
import "./BoardDisplay.css"

type BoardDisplayProps = {
    text: string
    enabled: boolean
}

const BoardDisplay: React.FC<BoardDisplayProps> = ({
    text,
    enabled
}: BoardDisplayProps) => {
    if (!enabled) return null

    return (
        <div className="board-display">
            <div className="shadow"></div>
            <h1 className="board-text">{text}</h1>
        </div>
    )
}

export default BoardDisplay
