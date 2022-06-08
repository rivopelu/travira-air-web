import React from 'react'
import { ContainerMain } from './components'
import { AboutPage, ContactCard, FleetPage, FooterPage, HomePage, NavbarPage, SafetyPage, TestiPage } from './pages'

const App = () => {
    return (
        <div className=' flex flex-col min-h-screen items-center '>
            <NavbarPage />
            <ContainerMain >
                <HomePage />
            </ContainerMain>
            <AboutPage />
            <SafetyPage />
            <FleetPage />
            <TestiPage />
            <ContactCard />
            <div className='bg-gray-200 w-full flex justify-center'>

                <FooterPage />
            </div>
        </div>
    )
}

export default App