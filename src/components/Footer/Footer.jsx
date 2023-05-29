import React, { useRef, useEffect } from 'react'
import s from './Footer.module.scss'
import { Instagram, Telegram, Github } from 'react-bootstrap-icons'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'

const Footer = ({ setStatusLink }) => {
    let footer = useRef(null)
    let in_footer = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.from(in_footer, {
            scrollTrigger: {
                trigger: footer,
                // scrub: true,
                toggleActions: 'restart',
                start: 'top bottom',
                end: 'bottom bottom',
                // markers: true,
            },
            scale: .5,
            opacity: 0,
            duration: 1.8
            // duration: 2,
        })
    }, [])

    return (
        <footer className={s.footer} ref={el => footer = el}>
            <div className={`${s.in_footer} container`} ref={el => in_footer = el}>
                <div className={s.txt_footer}>
                    <h1 >Contacts</h1>
                    <Link to='/sendMessage'>
                        <button onClick={() => setStatusLink(2)} className={s.btn}>Send message</button>
                    </Link>
                </div>
                <div className={s.social}>
                    <a href="https://instagram.com/timurzubcenko?igshid=YmMyMTA2M2Y="><Instagram /></a>
                    <a href="https://github.com/timurzubcenko"><Github /></a>
                    <a href="https://t.me/timurzubchenko"><Telegram /></a>
                </div>
                <p className={s.end_footer}>subscribe to me <br /> on
                    Telegram, Instagram, GitHub, Twitter</p>
            </div>
        </footer>
    );
};
export default Footer