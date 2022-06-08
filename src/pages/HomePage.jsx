import React from 'react'
import { homePesawat } from '../assets'
import { BtnComp } from '../components'

const HomePage = () => {
    return (
        <div className='HomePage w-full flex  h-screen items-center pt-20'>
            <div className="kiri w-1/2">
                <h1 className='font-bold text-6xl'>
                    <span className='text-indigo-800'>World class </span>
                    charter and maintenance flights</h1>
                <p className='py-8'>Our goal is simply to offer the highest standards of professionalism and service as measured by our safety record, dispatch reliability and customer satisfaction</p>
                <BtnComp>Booking Now</BtnComp>
            </div>

            <img src={homePesawat} alt="home pesawat" className='w-[700px]' />

        </div>
    )
}

export default HomePage