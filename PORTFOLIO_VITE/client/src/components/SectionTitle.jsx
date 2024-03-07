import React from 'react'

function SectionTitle({title}) {
  return (
    <div className='flex gap-10 items-center py-10'>
        <h1 className='text-3xl text-yellow-200 sm:w-1/2'>{title}</h1>
        <div className='w-60 h-[1px] bg-teritary'></div>
    </div>
  )
}

export default SectionTitle