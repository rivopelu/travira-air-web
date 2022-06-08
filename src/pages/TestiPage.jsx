import React from 'react'
import { testiImg } from '../assets'
import { ContainerMain, StartRating } from '../components'

const TestiPage = () => {

    const dataTesti = [
        {
            title: 'Ade Pranaya', company: 'PT. Pertamina', img: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', star: 5, comment: `Thank you, I was helped by being there
travira air The flight is very comfortable and safe.` },
        { title: 'Efran Adiyatma', company: 'PT. Petonas', img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80', star: 4, comment: `Thank you Travira air I'm very happy, my work goes smoothly` },
    ]

    return (
        <ContainerMain className={'relative h-[650px] overflow-hidden  mb-10 mt-10'}>

            <img className='h-full w-[720px] absolute right-0 rounded-3xl -z-10' src={testiImg} alt="" />
            <div className='z-10 pt-20'>
                <p className='text-6xl w-[600px] font-bold'>This is what clients say about us</p>

                <div className='flex items-center gap-7 mt-10'>
                    {
                        dataTesti.map((item, i) => (
                            <div className="card p-3 bg-white border rounded-xl  shadow-lg  w-96">
                                <div className='flex mb-4'>

                                    <div className='h-12 w-12 overflow-hidden rounded-full'>

                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <div className='pl-3'>

                                        <div className='font-bold'>{item.title}</div>
                                        <p>{item.company}</p>
                                    </div>
                                </div>

                                <div className='font-semibold pb-4'>{item.comment}</div>
                                <StartRating rate={item.star} />
                            </div>
                        ))
                    }

                </div>
            </div>
        </ContainerMain>
    )
}

export default TestiPage