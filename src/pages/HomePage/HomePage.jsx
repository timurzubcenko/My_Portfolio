import React, { useRef, useEffect } from 'react'
import s from './HomePage.module.scss'
import { Instagram, Telegram, Github } from 'react-bootstrap-icons'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MyCard from '../../components/MyCard/MyCard'
// import Cursor from '../../components/Cursor/Cursor'
import AboutMe from '../../components/AboutMe/AboutMe'
import MyWorks from '../../components/MyWorks/MyWorks'
import MySkils from '../../components/MySkils/MySkils'
import Footer from '../../components/Footer/Footer'

// import img from '../../assets/img/img.svg'
// import panto from '../../assets/img/full_1.png'
// import nft from '../../assets/img/nft.html.png'
// import coffee from '../../assets/img/coffe.png'

const HomePage = ({ setStatusLink }) => {
    let social_btns = useRef(null)
    let main_txt = useRef(null)
    let section = useRef(null)


    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        const tl = gsap.timeline()
        tl.from(main_txt, { y: 50, opacity: 0, duration: 1 })
        tl.from(social_btns, { x: -100, duration: .7 }, 0.5)

        gsap.fromTo(section, { x: 0, y: 0, opacity: 1 }, {
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                // markers: true,
            },
            opacity: .4,
            scale: .9,
        })
    }, [])

    return (
        <div className={s.home}>
            {/* <Cursor /> */}
            <section className={s.section} ref={el => section = el}>
                <div className={s.social_btns} ref={el => social_btns = el}>
                    <button className={s.btn}>
                        <a href="https://www.instagram.com/timurzubcenko/"><i><Instagram /></i></a>
                    </button>
                    <button className={s.btn}>
                        <a href="https://t.me/timurzubchenko"><i><Telegram /></i></a>
                    </button>
                    <button className={s.btn}>
                        <a href="https://github.com/timurzubcenko"><i><Github /></i></a>
                    </button>
                </div>
                <div className={`${s.in_section} container`}>
                    <h1 ref={el => main_txt = el} className={s.main_txt}>Hello, I'm Timur  <span>Professional</span> Front-end developer. 👋🏻</h1>
                    <MyCard />
                </div>
            </section>
            <AboutMe setStatusLink={setStatusLink} />
            <MyWorks />
            <MySkils />
            <Footer setStatusLink={setStatusLink} />
        </div >
    );
};
export default HomePage