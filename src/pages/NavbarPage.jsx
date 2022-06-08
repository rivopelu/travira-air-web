import React, { useState } from 'react'
import { logoImg } from '../assets'
import { NavLink } from 'react-router-dom'
import { BtnComp, BtnSecondary, ContainerMain } from '../components'
const NavbarPage = () => {

    const [color, setColor] = useState(false);


    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    const NavBarData = [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
        { name: 'Service', url: '/services' },
        { name: 'Safety', url: '/safety' },
        { name: 'Careers', url: '/careers' },
    ]


    return (
        <nav className={`NavbarPage  flex w-full justify-center fixed h-22 translate-y-5 duration-200 z-[10000] ${color && 'bg-white translate-y-0 border-b'}`}>
            <ContainerMain className='w-full flex items-center justify-between'>

                <div className='Logo'><img className='w-20' src={logoImg} alt="travira air" /></div>
                <div className='flex items-center gap-6 font-semibold'>
                    {

                        NavBarData.map((item, i) => (
                            <NavLink className={'text-gray-700'} activeClassName='active' to={item.url}>{item.name}</NavLink>

                        ))
                    }
                </div>
                <div>
                    <BtnSecondary>Contact Us</BtnSecondary>
                </div>
            </ContainerMain>
        </nav>
    )
}

export default NavbarPage