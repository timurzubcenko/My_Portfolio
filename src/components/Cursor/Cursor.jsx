import React, { useRef, useEffect } from 'react'
import s from './Cursor.module.scss'
import { gsap } from 'gsap'

const Cursor = () => {
    let mouseX = 0, mouseY = 0, positionX = 0, positionY = 0

    function mouseCoords(e) {
        mouseX = e.pageX
        mouseY = e.pageY
    }

    let cursor = useRef(null)
    let aura = useRef(null)

    useEffect(() => {
        gsap.to({}, .01, {

            repeat: -1,

            onRepeat: () => {
                positionX += (mouseX - positionX) / 5
                positionY += (mouseY - positionY) / 5

                gsap.set(cursor, {
                    css: {
                        left: mouseX,
                        top: mouseY
                    }
                })
                gsap.set(aura, {
                    css: {
                        left: positionX - 21,
                        top: positionY - 21,
                    }
                })

            }

        })

        document.addEventListener('mousemove', (e) => {
            // request = requestAnimationFrame(updateMe)
            mouseCoords(e)
            cursor.style.opacity = '1'
            aura.style.opacity = '1'
        })

        document.addEventListener('mouseout', (e) => {
            cursor.style.opacity = '0'
            aura.style.opacity = '0'
        })
        document.addEventListener('scroll', (e) => {
            cursor.style.opacity = '0'
            aura.style.opacity = '0'
        })

    }, [])

    return (
        <div className={s.main_cursor}>
            <div className={s.cursor} ref={el => cursor = el}></div>
            <div className={s.aura} ref={el => aura = el}></div>
        </div>
    );
};
export default Cursor