import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-900'>
      <div className="flex  justify-between px-3 mycontainer">

        <div className="logo font-bold text-white">
          <span className='text-green-700'>&lt;</span>
          Pass<span className='text-green-700'>OP&gt;</span>
          </div>
        <ul  >
            <li className='flex gap-10 py-3 px-1 text-white font-bold' >
                <a href="/" className='hover:font-bold'>Home</a>
                <a href="/" className='hover:font-bold'>about</a>
                <a href="/" className='hover:font-bold'>Contact</a>
            </li>
        </ul>
        <button className='min-w-11  min-h-9  text-white  bg-green-600 rounded-full flex ring-white ring-1'>
          <img className='min-w-10 px-1 ' src="/public/icon/github.svg" alt="Github" />
          <span  className='font-bold py-2 px-2'>Github</span>
        </button>
      </div>

    </nav>
  )
}

export default Navbar
