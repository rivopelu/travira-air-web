import React from 'react'
import { About5, gambarAbout } from '../assets'
import { ContainerMain } from '../components'

const AboutPage = () => {
    const listAbout = [
        { title: 'SCHEDULED & SPOT CHARTER' },
        { title: 'LONGTERM CONTRACT' },
        { title: 'MEDICAL EVACUATION FLIGHT' },
        { title: 'AIRCRAFT MANAGEMENT' },
        { title: 'AIRCRAFT MRO' },
        { title: 'ONSHORE' },
        { title: 'OFFSHORE' },

    ]
    return (
        <div className='bg-[#0E1035] w-full flex  justify-center text-white py-20'>
            <ContainerMain>

                <p className='text-center pb-10'><span className='text-blue-400'>Companies</span> that have used our services</p>
                <div className='w-full flex items-center justify-between mb-16'>
                    {
                        gambarAbout.map((item, i) => (

                            <div key={i} className='w-1/4 flex items-center px-12'><img className='' src={item.img} alt="brandLogo" /></div>
                        ))
                    }
                </div>

                <div className='flex gap-10 px-20 h-fit'>
                    <div className="kiri "><img className='rounded-xl h-80' src={About5} alt="" /></div>
                    <div className="kanan flex flex-col justify-between h-80 ">
                        <h1 className='text-6xl font-bold'>Our <span className='text-blue-500'>Service</span></h1>
                        <p className=''>Travira Air is totally committed to supporting our clients by providing safe and reliable solutions for their air charter needs.</p>

                        <div className='flex flex-col flex-wrap justify-evenly  h-28 gap-1 '>
                            {
                                listAbout.map((item, i) => (
                                    <p className='border-b mr-5 w-fit'>{item.title}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </ContainerMain>
        </div>
    )
}

export default AboutPage