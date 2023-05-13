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
                <h1 >Timur Zubchenko</h1>
                <p >Hello, I'm Timur, I'm 17 years old and I'm a web developer from Ukraine, namely the city of Zaporozhye.</p>
            </div>
            <a className={s.link} href="https://github.com/timurzubcenko">
                <Github className={s.icon_github} />
                <p>GitHub</p>
            </a>
            <div className={s.social_btns}>
                <button className={s.btn}>
                    <img src={mongoDB} alt="" />
                </button>
                <button className={s.btn}>
                    <img src={express} alt="" />
                </button>
                <button className={s.btn} >
                    <img src={react} alt="" />
                </button>
                <button className={s.btn}>
                    <img src={node} alt="" />
                </button>
            </div>
        </div >
    );
};
export default MyCard