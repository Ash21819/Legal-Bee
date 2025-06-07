import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
   <>
   <section className='max-w-full min-h-full px-6 py-12 mt-2 bg-gradient-to-br from-yellow-600/30 to-yellow-600'>
  <div className='flex flex-col md:flex-row'>
    {/* Left part */}
    <div className='flex flex-col gap-4 w-full md:w-1/2 justify-center items-center text-center'>
      <h1 className='text-6xl font-bold text-gray-900'>Legal Bee Business Solutions LLP</h1>
      <h2 className='text-4xl font-bold text-gray-100'>Your Partner in Business Success</h2>
      <p className='text-2xl text-gray-700'>Expert legal, compliance, and business <br /> advisory services tailored for you</p>
      <button className='bg-amber-400 text-black py-2 px-4 rounded-full text-lg font-bold hover:shadow-md transition duration-300 hover:border-2 '><Link href="/Contactus">Get Started</Link></button>
    </div>

    {/* Right part */}
    <div className='w-full md:w-1/2'></div>
  </div>
</section>
   </>
  )
}
