import React, { useRef, useEffect } from 'react'
import s from './Footer.module.scss'
import { Instagram, Telegram, Github } from 'react-bootstrap-icons'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'

const Footer = ({ setStatusLink }) => {

    let title = useRef(null)
    let btn = useRef(null)
    let social = useRef(null)
    let footer = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.from([title, btn, social, footer], {
            scrollTrigger: {
                trigger: footer,
                // markers: true,
                // scrub: true
            },
            scale: .5,
            opacity: 1,
            duration: 2
        })
    }, [])

    return (
        <footer className={s.footer} ref={el => footer = el}>
            <div className={`${s.in_footer} container`}>
                <div className={s.txt_footer}>
                    <h1 ref={el => title = el} >Contacts</h1>
                    <Link to='/sendMessage'>
                        <button onClick={() => setStatusLink(2)} ref={el => btn = el} className={s.btn}>Send message</button>
                    </Link>
                </div>
                <div className={s.social} ref={el => social = el}>
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