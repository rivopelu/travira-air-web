import React from 'react'

const BtnComp = ({ children, className }) => {
    return (
        <button className={` font-bold bg-indigo-900 text-white px-5 py-3 rounded-lg hover:bg-indigo-800 duration-200 ${className}`}>{children}</button>
    )
}

export default BtnComp