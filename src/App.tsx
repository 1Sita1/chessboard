import { useState, useEffect } from "react"
import Board from "./components/Board/Board"
import BoardDisplay from "./components/BoardDisplay/BoardDisplay"
import "./App.css"
import ControlPanel from "./components/ControlPanel/ControlPanel"
import CountDown from "./components/CountDown/CountDown"
import GameStates from "./types/GameStates"

function App() {
    const [gameState, setGameState] =
        useState<GameStates>("countdown")

    return (
        <div className="App">
            <div className="game">
                <ControlPanel />
                <div className="board-container">
                    {gameState === "countdown" ? (
                        <CountDown
                            callback={() => {
                                setGameState("gaming")
                            }}
                        />
                    ) : null}
                    <Board />
                </div>
            </div>
        </div>
    )
}

export default App
