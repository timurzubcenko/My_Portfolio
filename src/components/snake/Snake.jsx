import React, { useCallback } from 'react'
import s from './Snake.module.scss'
import { useState } from 'react';
import { useEffect } from 'react';

const SIZE = 60
const SPEED = 100
let widthCol = Math.floor(window.innerWidth / SIZE) - 1
let heightCol = Math.floor(864 / SIZE) - 1
const START_TAILS = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }]
const START_DIREC = { dx: SIZE, dy: 0 }

const START_APPLE = {
    x: Math.floor(Math.random() * (widthCol - 1)) * SIZE,
    y: Math.floor(Math.random() * (heightCol - 1)) * SIZE,
}

const Snake = () => {

    const [score, setScore] = useState(0)
    const [tails, setTails] = useState(START_TAILS)
    const [snakeDirec, setSnakeDirec] = useState(START_DIREC)
    const [aplle, setAplle] = useState(START_APPLE)
    const [autoGame, setAutoGame] = useState(true)
    const [countKey, setCountKey] = useState(0)

    const rundomAplle = () => {
        const newAplle = {
            x: Math.floor(Math.random() * (widthCol - 1)) * SIZE,
            y: Math.floor(Math.random() * (heightCol - 1)) * SIZE
        }
        setAplle(newAplle)
    }

    const restart = useCallback(() => {
        setTails(START_TAILS)
        setSnakeDirec(START_DIREC)
        setAutoGame(true)
        rundomAplle()
        setScore(0)
    }, [])

    const checkIsTail = useCallback((newTail) => {
        return tails.some(tail => tail.x === newTail.x && tail.y === newTail.y)
    }, [tails])

    const game = useCallback(() => {
        const lastIndex = tails.length - 1

        let newTail = {
            x: tails[lastIndex].x + snakeDirec.dx,
            y: tails[lastIndex].y + snakeDirec.dy
        }

        newTail = collisionsBorder(newTail)

        const isTail = checkIsTail(newTail)
        if (isTail) {
            return restart()
        }

        if (newTail.x === aplle.x && newTail.y === aplle.y) {
            rundomAplle()
            setTails([...tails, newTail])
            setScore(score + 1)
        }
        else {
            setTails([...tails.filter((_, tailIndex) => tailIndex !== 0), newTail])
        }
    }, [snakeDirec, tails, restart, aplle, checkIsTail, score])

    const controlSnake = (e) => {
        setCountKey(countKey + 1)
        if ((e.key === 'w' || e.key === 'ArrowUp') && snakeDirec.dy !== SIZE) {
            setSnakeDirec({ dx: 0, dy: -SIZE })
            setAutoGame(false)
        }
        if ((e.key === 'a' || e.key === 'ArrowLeft') && snakeDirec.dx !== SIZE) {
            setSnakeDirec({ dx: -SIZE, dy: 0 })
            setAutoGame(false)
        }
        if ((e.key === 's' || e.key === 'ArrowDown') && snakeDirec.dy !== -SIZE) {
            setSnakeDirec({ dx: 0, dy: SIZE })
            setAutoGame(false)
        }
        if ((e.key === 'd' || e.key === 'ArrowRight') && snakeDirec.dx !== -SIZE) {
            setSnakeDirec({ dx: SIZE, dy: 0 })
            setAutoGame(false)
        }
    }

    const collisionsBorder = (newTail) => {
        if (newTail.x < 0) {
            newTail.x = widthCol * SIZE
        }
        else if (newTail.x > widthCol * SIZE) {
            newTail.x = 0
        }
        else if (newTail.y < 0) {
            newTail.y = heightCol * SIZE
        }
        else if (newTail.y > heightCol * SIZE) {
            newTail.y = 0
        }
        return newTail
    }

    const resizeBySize = () => {
        widthCol = Math.floor(window.innerWidth / SIZE) - 1
        heightCol = Math.floor(window.innerHeight / SIZE) - 1
    }

    useEffect(() => {
        // setTails([{ x: 10, y: 0 }, { x: 70, y: 0 }])
        const intervalId = setInterval(game, SPEED)
        return () => clearInterval(intervalId)
    }, [game])

    useEffect(() => {
        window.addEventListener('keydown', controlSnake)
        return () => window.removeEventListener('keydown', controlSnake)
    })

    useEffect(() => {
        window.addEventListener('resize', resizeBySize)
        return () => window.removeEventListener('resize', resizeBySize)
    })

    useEffect(() => {
        let timeoutID = setTimeout(() => setAutoGame(true), 2500)
        return () => clearTimeout(timeoutID);
    }, [countKey])

    return (
        <div className={s.playground}>
            <p className={s.score}>{score}</p>
            {
                tails.map((tail, index) =>
                    <div
                        key={index}
                        className={s.snake}
                        style={{
                            width: SIZE + 'px',
                            height: SIZE + 'px',
                            left: tail.x + "px",
                            top: tail.y + "px",
                            opacity: autoGame ? .5 : 1
                        }}
                    ></div>
                )
            }
            <div
                className={s.aplle}
                style={{
                    width: SIZE + 'px',
                    height: SIZE + 'px',
                    top: aplle.y + "px",
                    left: aplle.x + "px",
                    opacity: autoGame ? .5 : 1
                }}
            ></div>
        </div>
    );
};
export default Snake