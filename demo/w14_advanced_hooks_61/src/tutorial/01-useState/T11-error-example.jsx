import { useState } from 'react'
const T11_61 = () => {
  let count = 0
  function handleOnClick() {
    count += 1
    console.log('count:', count)
  }
  return (
    <>
      <h2>{count}</h2>
      <button type='button' className='btn' onClick={handleOnClick}>
        increment
      </button>
    </>
  )
}

export default T11_61
