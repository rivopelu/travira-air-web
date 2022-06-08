import React from 'react'

const ContainerMain = ({ children, className }) => {
    return (
        <section className={` w-full max-w-7xl ${className}`}>
            {children}
        </section>
    )
}

export default ContainerMain