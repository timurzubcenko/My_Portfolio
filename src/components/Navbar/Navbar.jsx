import React, { useState, useRef, useEffect } from 'react'
import s from './Navbar.module.scss'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'

const Header = ({ statusLink, setStatusLink }) => {

    const [stateMenu, setStateMenu] = useState(false)

    const activateMenu = () => {
        setStateMenu(!stateMenu)
    }

    let navbar = useRef(null)


    useEffect(() => {
        gsap.from(navbar, {
            // y: -100,
            opacity: 0,
            duration: 1,
            delay: 0.5,
        })
    }, [])

    const clickLink = (e) => {
        setStatusLink(e)
    }

    return (
        <header className={`${s.header}`} ref={el => navbar = el}>
            <div className={`${s.in_header}`}>
                <h2 className={s.my_name} >
                    Timur Zubchenko
                </h2>
                <div onClick={activateMenu} className={`${s.header_burger} ${stateMenu ? s.active : ''}`}>
                    <span></span>
                </div>
                <nav className={`${s.header_menu} ${stateMenu ? s.active : ''}`}>
                    <ul className={s.header_list}>
                        <Link onClick={activateMenu} to='/home'>
                            <li onClick={() => { clickLink(1) }} className={`${s.link_1} ${statusLink === 1 ? s.active : ''}`} >
                                Home
                            </li>
                        </Link>
                        <Link onClick={activateMenu} to='/sendMessage'>
                            <li onClick={() => clickLink(2)} className={`${s.link_2} ${statusLink === 2 ? s.active : ''}`} >
                                Send Message
                            </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Header