import React from 'react'

const Today = () => {
    let today= new Date().toDateString();
      return (
    <div className='livedate'> {today} </div>
  )
}

export default Today