import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'

const HomePage = () => {
  return (
    <div className=' min-h-screen'>
      <div className="flex p-3 max-w-5xl mx-auto flex-col md:flex-row md:items-center gap-3">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white md:text-5xl">Become a RFID seller </h1>
          <h2 className="text-lg text-gray-600 dark:text-gray-300 md:text-2xl">Start selling your RFID products</h2>
          {/* <p className="text-gray-600 dark:text-gray-300 md:text-lg mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p> */}
          <Link to={"/"}>
          <Button className='mt-5' gradientDuoTone={"purpleToBlue"} pill outline>
            Start Selling
          </Button>
        </Link>

        </div>
        <div className="flex justify-center items-center">
          <img className="w-96 h-96 md:w-96 md:h-auto md:ml-10" src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="hero" />
        </div>
        
      </div>
      <section className="flex p-3 max-w-5xl mx-auto flex-col md:flex-row md:items-center gap-3">
      <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white md:text-5xl">Why Sellers Choose us?</h2>
          {/* <h2 className="text-lg text-gray-600 dark:text-gray-300 md:text-2xl">Start selling your RFID products</h2> */}
          {/* <p className="text-gray-600 dark:text-gray-300 md:text-lg mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p> */}
          

        </div>
        <div className="flex justify-center items-center">
          <img className="w-96 h-96 md:w-96 md:h-auto md:ml-10" src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="hero" />
        </div>
      </section>
    </div>
  )
}

export default HomePage