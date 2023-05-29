import React, { useEffect, useRef } from 'react'
import s from './AboutMe.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MyPhoto from '../../assets/img/me.jpg'
import { Link } from 'react-router-dom'

const AboutMe = ({ setStatusLink }) => {
    let about_me = useRef(null)
    let section_am = useRef(null)
    let picture = useRef(null)

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.from(about_me, {
            scrollTrigger: {
                trigger: section_am,
                start: 'top center',
                end: 'center center',
                scrub: true,
                // markers: true,
                // pin: true
            },
            scale: .5,
            opacity: 0,
            duration: .7,
        })

        gsap.from(picture, {
            scrollTrigger: {
                trigger: section_am,
                start: 'top center',
                end: 'center center',
                scrub: true,
                // markers: true,
                // pin: true
            },
            yPercent: '50',
            opacity: 0,
            duration: .7,
        })
    }, [])

    return (
        <section className={s.section_am} ref={el => section_am = el}>
            <div className={`${s.in_section_am} container`}>
                <div className={s.picture} ref={el => picture = el}>
                    <img src={MyPhoto} alt="" />
                </div>
                <div className={s.about_me} ref={el => about_me = el}>
                    <h3>About me</h3>
                    <h2>Timur Zubchenko</h2>
                    <p>Frontend development</p>

                    <p>Professional skills and knowledge
                        • Strong knowledge: Javascript ES6, ES5, React, Node JS;
                        • Layout: HTML5, CSS3/SASS, adaptive and cross-browser layout, layout for mobile devices;
                        • Basic knowledge: MongoDB, Express JS;
                        • Experience with: restAPI, GIT;
                        • Work with graphic editors: Figma, Photoshop;
                        • There is an understanding</p>

                    <p>Languages
                        • Russian
                        • Ukrainian
                        • English language ‒ A2 now actively studying</p>
                    <Link to='/sendMessage'>
                        <button onClick={() => setStatusLink(2)} className={s.btn}>
                            Send message to me
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
export default AboutMe