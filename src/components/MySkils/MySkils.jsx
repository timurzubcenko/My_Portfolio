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
        gsap.from([title, text], {
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom bottom',
                toggleActions: 'restart',
                // scrub: true,
                // markers: true,
                // pin: true
            },
            scale: .5,
            opacity: 0,
            duration: 2,
            ease: 'back',
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
                    <p>I know well: JavaScript, React, React Native, Redux, Vue JS, Node JS, Express JS, MongoDB, GSAP, jQuery, HTML (HTML5), CSS (CSS3), SCSS, Flexbox, БЭМ.</p>
                </div>
            </div>
        </section>
    );
};
export default MySkils