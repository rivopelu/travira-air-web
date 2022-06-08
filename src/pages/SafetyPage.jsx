import React from 'react'
import { safetyImg } from '../assets'
import { ContainerMain } from '../components'

const SafetyPage = () => {
    const safetyList = [
        { title: 'MANAGEMENT COMMITMENT' },
        { title: 'IT-BASED TRACKING AND MONITORING' },
        { title: 'INDEPENDENT VERIFICATION' },
        { title: 'INTERNATIONAL ACCREDITATION' },
        { title: 'BEHIND THE SCENES' },
        { title: 'GLOBAL OUTLOOK' },
        { title: 'PILOTS AND CREW' },
        { title: 'MEDICAL FACILITIES' },
        { title: 'AIRCRAFT FLEET' },
    ]
    return (
        <ContainerMain className={'py-14 flex '} >
            <div className="kiri flex flex-col text-gray-900 justify-between h-[400px]">

                <h1 className='text-5xl font-bold '>Safety</h1>
                <p className='w-[70%] text-xl font-semibold text-gray-600'>It is a matter of pride for Travira Air that we have one of the best air charter safety records in the region</p>

                <div className='flex flex-col gap-2 flex-wrap h-40  '>
                    {
                        safetyList.map((item, i) => (
                            <p className='border-b border-gray-700 w-fit'>{item.title}</p>
                        ))
                    }
                </div>
            </div>
            <div className="kanan ">
                <img src={safetyImg} alt="safety img" className='rounded-2xl h-[450px]' />
            </div>

        </ContainerMain>
    )
}

export default SafetyPage