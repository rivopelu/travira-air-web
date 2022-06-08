import React from 'react'
import { ContainerMain, SwiperComp } from '../components'


const FleetPage = () => {
    return (
        <ContainerMain className={'py-10 '}>
            <h1 className='text-center text-4xl font-bold'>Fleet</h1>
            <p className='text-center py-5 w-1/2 mx-auto'>Travira Air is totally committed to supporting our clients by providing safe and reliable solutions for their air charter needs.</p>

            <div>
                <SwiperComp />
            </div>
        </ContainerMain>
    )
}

export default FleetPage