import React from 'react'
import { contactOrna } from '../assets'
import { BtnComp, ContainerMain } from '../components'

const ContactCard = () => {
    return (
        <ContainerMain className='bg-[#0E1035] overflow-hidden text-white rounded-[50px] relative h-72 flex items-center justify-between  -translate-y-48 w-[1200px]'>
            <img src={contactOrna} className='absolute right-0 h-[700px] flex translate-x-60 z-[4]' alt="" />
            <div className='px-20 flex items-center justify-between z-[5]  w-full'>

                <div className="kiri font-bold text-4xl w-72">Don't hesitate to contact us</div>
                <div className="kanan">
                    <BtnComp className={'bg-white text-3xl rounded-2xl text-[#0E1035] border hover:bg-gray-300'}>Contact Us</BtnComp>
                </div>
            </div>
        </ContainerMain>
    )
}

export default ContactCard