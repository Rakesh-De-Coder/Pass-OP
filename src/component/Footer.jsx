import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center fixed bottom-0  w-full '>
            <div className="logo font-bold text-white">
                <span className='text-green-700'>&lt;</span>
                Pass<span className='text-green-700'>OP&gt;</span>
            </div>
            <div className='flex mx-8'>
                Created With  <img className='max-w-8' src="/public/icon/heart.svg" alt="Love" />  by Rakesh_De_Coder

            </div>
        </div>
    )
}

export default Footer
