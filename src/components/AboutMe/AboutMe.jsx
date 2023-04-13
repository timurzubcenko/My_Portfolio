import React, { useEffect, useRef } from 'react'
import s from './AboutMe.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MyPhoto from '../../assets/img/myPhoto.jpg'
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
            yPercent: '100',
            opacity: 0,
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
                    <p>I'm Graphic Designer,and I'm very passionate and dedicated to my work
                        With 20 years experience as a professional Photography, I have lot of
                        acquired the skills and knowledge necessary to make your project a
                        success. I enjoy every step the Photography process,from discussion
                        and collaboration.</p>
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