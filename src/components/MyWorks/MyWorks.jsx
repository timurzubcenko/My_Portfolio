import React, { useRef, useEffect } from 'react'
import s from './MyWorks.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import work1 from '../../assets/img/w1.png'


const MyWorks = () => {

    //3D scroll
    let section_1 = useRef(null)
    let frame_1 = useRef(null)
    let frame_2 = useRef(null)
    let frame_3 = useRef(null)
    let frame_4 = useRef(null)
    let frame_5 = useRef(null)
    let frame_6 = useRef(null)
    let frame_7 = useRef(null)
    let frame_8 = useRef(null)
    let frame_9 = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {

        [frame_1, frame_2, frame_3, frame_4, frame_5, frame_6, frame_7, frame_8, frame_9].forEach((frame, index) => {
            // frame.style.transform = `scale(${1 - (index / 10)})`
            frame.style.opacity = 0
        })

        gsap.to([frame_1, frame_2, frame_3, frame_4, frame_5, frame_6, frame_7, frame_8, frame_9], {
            scrollTrigger: {
                trigger: section_1,
                start: 'top top',
                end: '+=7000',
                scrub: true,
                pin: true,
            },
            opacity: 2.5,
            translateZ: 2000,
            stagger: 1,
            duration: 3.5,
            // ease: "power1.out",

            // opacity: 3,
            // translateZ: 2000,
            // stagger: 1,
            // duration: 3,
        })
    }, [])


    return (
        <section className={s.section} ref={el => section_1 = el}>
            <div className={s.gallery}>

                <div className={s.frame} ref={el => frame_1 = el}>
                    <div className={s.frame_content}>
                        <h2>My Works</h2>
                    </div>
                </div>

                <div className={s.frame} ref={el => frame_2 = el}>
                    <div className={s.frame_content}>
                        <a href="https://timurzubcenko.github.io/Panto/"><div className={`${s.frame_media} ${s.frame_media_1} ${s.frame_media_left}`}></div></a>
                    </div>
                    <div className={s.frame_content}>
                        <a href="https://timurzubcenko.github.io/Panto/"><p>Panto HomePage</p></a>
                    </div>
                </div>

                <div className={s.frame} ref={el => frame_3 = el}>
                    <div className={s.frame_content}>
                        <a href="https://timurzubcenko.github.io/SESSIONartist/"><p>SESSION ARTIST HomePage</p></a>
                    </div>
                    <div className={s.frame_content}>
                        <a href="https://timurzubcenko.github.io/SESSIONartist/"><div className={`${s.frame_media} ${s.frame_media_2} ${s.frame_media_right}`}></div></a>
                    </div>
                </div>

                <div className={s.frame} ref={el => frame_4 = el}>
                    <div className={s.frame_content}>
                        <a href="https://timurzubcenko.github.io/Education/"><div className={`${s.frame_media} ${s.frame_media_3} ${s.frame_media_left}`}></div></a>
                    </div>
                    <div className={s.frame_content}>
                        <a href="https://timurzubcenko.github.io/Education/"><p>Education HomePage</p></a>
                    </div>
                </div>

                <div className={s.frame} ref={el => frame_5 = el}>
                    <div className={s.frame_content}>
                        <a href="https://timurzubcenko.github.io/Cootels/"><p>Cootels HomePage</p></a>
                    </div>
                    <div className={s.frame_content}>
                        <a href="https://timurzubcenko.github.io/Cootels/"><div className={`${s.frame_media} ${s.frame_media_4} ${s.frame_media_right}`}></div></a>
                    </div>
                </div>

                <div className={s.frame} ref={el => frame_6 = el}>
                    <div className={s.frame_content}>
                        <a href="https://messenger-timurzubcenko.netlify.app/"><div className={`${s.frame_media} ${s.frame_media_5} ${s.frame_media_left}`}></div></a>
                    </div>
                    <div className={s.frame_content}>
                        <a href="https://messenger-timurzubcenko.netlify.app/"><p>My Messenger</p></a>
                    </div>
                </div>

                <div className={s.frame} ref={el => frame_7 = el}>
                    <div className={s.frame_content}>
                        <a href="https://todolist-timurzubchenko.netlify.app/">
                            <p>To Do List HomePage</p>
                            <h5>With registration</h5>
                        </a>
                    </div>
                    <div className={s.frame_content}>
                        <a href="https://todolist-timurzubchenko.netlify.app/"><div className={`${s.frame_media} ${s.frame_media_6} ${s.frame_media_right}`}></div></a>
                    </div>
                </div>

                <div className={s.frame} ref={el => frame_8 = el}>
                    <div className={s.frame_content}>
                        <a href="https://dfrnc.com/sandbox/timur/animation_v10/"><div className={`${s.frame_media} ${s.frame_media_7} ${s.frame_media_left}`}></div></a>
                    </div>
                    <div className={s.frame_content}>
                        <a href="https://dfrnc.com/sandbox/timur/animation_v10/"><p>SVG Animation</p></a>
                    </div>
                </div>

                <div className={s.frame} ref={el => frame_9 = el}>
                    <div className={s.frame_content}>
                        <a href="https://timurzubcenko.github.io/Furniture/">
                            <p>Furniture HomePage</p>
                            <h5>GSAP Animation</h5>
                        </a>
                    </div>
                    <div className={s.frame_content}>
                        <a href="https://timurzubcenko.github.io/Furniture/"><div className={`${s.frame_media} ${s.frame_media_8} ${s.frame_media_right}`}></div></a>
                    </div>
                </div>

                {/* <div className={s.frame} ref={el => frame_4 = el}>
                    Далеко-далеко за словесными горами в стране.dsfsf
                </div>
                <div className={s.frame} ref={el => frame_5 = el}>
                    Далеко-далеко за словесными горами в стране.dsfsf
                </div> */}

            </div>
        </section>
    );
};
export default MyWorks