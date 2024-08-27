import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-[87%] mx-auto max-w-[1400px] py-[40px]'>
      {children}
    </div>
  )
}

export default Container
