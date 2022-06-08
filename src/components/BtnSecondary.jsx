import React from 'react'

const BtnSecondary = ({ children }) => {
    return (
        <button className='text-indigo-900 font-bold border-2 px-4 py-2 rounded-lg hover:border-blue-800 hover:bg-black/10 hover:text-blue-800 duration-200 border-indigo-900'>{children}</button>
    )
}

export default BtnSecondary