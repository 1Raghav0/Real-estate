import React from 'react'

const Awards = () => {
  return (
    <>
      <div className='h-full w-auto flex-col flex items-center justify-center bg-blue-900 p-20'>
        <span className='text-green-300'>Our Awards</span>
        <p className='text-3xl font-semibold text-white'>Over 1,24,000+ Happy User <br />Bieng With Us Still They Love</p>
        <p className='mr-2 text-3xl font-semibold text-white'>Our Services</p>
        <div className='flex items-center justify-center gap-x-16 gap-y-16 flex-wrap m-10'>
            <div className='flex-col flex items-center justify-center'>
            <div className='h-24 w-24 bg-gray-500 rounded-r-[50px] rounded-b-[50px] p-6 '>
            <i className="ri-trophy-fill text-4xl text-white"></i>
            </div>
            <h1 className='text-4xl font-semibold text-white m-2'>32 M</h1>
            <p className='text-lg text-gray-400'>Blue Burmin Award</p>
            </div>

            <div className='flex-col flex items-center justify-center'>
            <div className='h-24 w-24 bg-gray-500  rounded-r-[50px] rounded-b-[50px] p-6 '>
            <i className="ri-briefcase-fill text-4xl text-white"></i>
            </div>
            <h1 className='text-4xl font-semibold text-white m-2'>43 M</h1>
            <p className='text-lg text-gray-400'>Mimo X11 Award</p>
            </div>

            <div className='flex-col flex items-center justify-center'>
            <div className='h-24 w-24 bg-gray-500 rounded-r-[50px] rounded-b-[50px] p-6 '>
            <i className="ri-lightbulb-fill text-4xl text-white"></i>
            </div>
            <h1 className='text-4xl font-semibold text-white m-2'>51 M</h1>
            <p className='text-lg text-gray-400'>Australian UGC Award</p>
            </div>

            <div className='flex-col flex items-center justify-center'>
            <div className='h-24 w-24 bg-gray-500 rounded-r-[50px] rounded-b-[50px] p-6 '>
            <i className="ri-heart-fill text-4xl text-white"></i>
            </div>
            <h1 className='text-4xl font-semibold text-white m-2'>42 M</h1>
            <p className='text-lg text-gray-400'>IITCA Green Award</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Awards
