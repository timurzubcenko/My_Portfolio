import React, { useRef, useEffect } from 'react'
import s from './MySkils.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const MySkils = () => {

    let title = useRef(null)
    let section = useRef(null)
    let text = useRef(null)

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const tl = gsap.timeline()
        tl.from(title, {
            scrollTrigger: {
                trigger: section,
                start: 'top center',
                end: 'center center',
                scrub: true,
                // markers: true,
                // pin: true
            },
            yPercent: '50',
            opacity: 0,
            duration: 1,
        })
        tl.from(text, {
            scrollTrigger: {
                trigger: section,
                start: 'top center',
                end: 'center center',
                scrub: true,
                // markers: true,
                // pin: true
            },
            yPercent: '50',
            opacity: 0,
            duration: 1,
        })
    }, [])

    return (
        <section className={s.section} ref={el => section = el}>
            <div className={`${s.in_section} container`}>
                <div className={s.title} ref={el => title = el}>
                    <h3>My Skils</h3>
                </div>
                <div className={s.text} ref={el => text = el}>
                    <p>
                        Hello, I'm Timur, I'm 17 years old and I'm a web developer from Ukraine, namely the city of Zaporozhye. create adaptive, cross-browser and convenient layout I am easy to work with and it is important to me that the client is satisfied!
                    </p>
                    <br />
                    <p>I know well: JavaScript, React, React Native, Redux, Node JS, Express JS, MongoDB, GSAP, jQuery, HTML (HTML5), CSS (CSS3), SCSS, Flexbox, БЭМ.</p>
                </div>
            </div>
        </section>
    );
};
export default MySkils