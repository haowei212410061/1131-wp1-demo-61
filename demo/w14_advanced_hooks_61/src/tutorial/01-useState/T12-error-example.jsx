import { useState } from 'react'
const T12_61 = () => {
  // let count = 0
  let [count, setCount] = useState(0)
  function handleOnClick() {
    setCount(count++)
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

export default T12_61
