import React from 'react'
import { logoImg } from '../assets'
import ContainerMain from '../components/ContainerMain';

const FooterPage = () => {
    return (

        <ContainerMain className={'flex w-full justify-between items-start py-10'} >
            <div className='w-1/4 h-full'>
                <img src={logoImg} className='my-auto' alt="" />
            </div>

            <div className='w-1/4 flex flex-col gap-2'>
                <h1 className='font-bold pb-3 '>Company</h1>
                <p>About</p>
                <p>Careers</p>
                <p>Blog</p>
            </div>
            <div className='w-1/4 flex flex-col gap-2'>
                <h1 className='font-bold pb-3 '>Service</h1>
                <p>Scheduled & Spot Charter</p>
                <p>Medical Evacuation Flight</p>
                <p>Aircraft Management</p>
            </div>
            <div className='w-1/4 flex flex-col gap-2'>
                <h1 className='font-bold pb-3 '>Office</h1>
                <p>commercial@travira-air.com</p>
                <p>Graha Paramita 3rd Floor</p>
                <p>Jl. Denpasar Raya Blok D-2 Kav.8 Kuningan
                    Jakarta 12940, Indonesia     </p>
            </div>
        </ContainerMain>
    )
}

export default FooterPage