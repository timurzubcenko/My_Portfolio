import React, { useEffect, useRef } from 'react'
import s from './MyCard.module.scss'
import myPhoto from '../../assets/img/IMG_698.webp'
import { Github } from 'react-bootstrap-icons'
import { gsap } from 'gsap'
import mongoDB from '../../assets/img/m.84995b88482e59ed9685.webp'
import express from '../../assets/img/e.c0dfb6da5687ed284580_2.webp'
import react from '../../assets/img/r.bd71772206a9f77179df.png'
import node from '../../assets/img/n.7a33a3dcc5d0e020dd08.png'


const MyCard = () => {

    let card = useRef(null)
    let name = useRef(null)
    let card_text = useRef(null)
    let github = useRef(null)
    let social_btn = useRef(null)
    let social_btn_2 = useRef(null)
    let social_btn_3 = useRef(null)
    let social_btn_4 = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()
        tl.from(card, { y: 50, opacity: 0, duration: 1 })
    }, [])

    return (
        <div className={s.my_card} ref={el => card = el}>
            <div className={s.my_photo}>
                <img src={myPhoto} alt="" />
            </div>
            <div className={s.text}>
                <h1 ref={el => name = el}>Timur Zubchenko</h1>
                <p ref={el => card_text = el}>Hello, I'm Timur, I'm 17 years old and I'm a web developer from Ukraine, namely the city of Zaporozhye.</p>
            </div>
            <a ref={el => github = el} className={s.link} href="https://github.com/timurzubcenko" target="_blank">
                <Github className={s.icon_github} />
                <p>GitHub</p>
            </a>
            <div className={s.social_btns}>
                <button ref={el => social_btn = el} className={s.btn}>
                    <a href=""><img src={mongoDB} alt="" /></a>
                </button>
                <button ref={el => social_btn_2 = el} className={s.btn}>
                    <a href=""><img src={express} alt="" /></a>
                </button>
                <button ref={el => social_btn_3 = el} className={s.btn}>
                    <a href=""><img src={react} alt="" /></a>
                </button>
                <button ref={el => social_btn_4 = el} className={s.btn}>
                    <a href=""><img src={node} alt="" /></a>
                </button>
            </div>
        </div >
    );
};
export default MyCard