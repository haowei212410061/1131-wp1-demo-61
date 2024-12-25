import { useEffect, useState } from 'react'

const T21_61 = () => {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)
  const [value3, setValue3] = useState(0)
  useEffect(() => {
    console.log('value1 ' + value1)
  })
  //如果沒有放第二個參數陣列 不管做甚麼都會執行一次

  useEffect(() => {
    console.log('value2 ' + value2)
  }, []) //如果第二個參數放空陣列 代表只會執行一次 後面不管點擊多少次value2的按鈕都不會有反應

  useEffect(() => {
    console.log('value3 ' + value3)
  }, [value3])

  //如果第二個參數陣列內有參數 代表每執行一次 就會改變一次
  return (
    <div>
      <h1>value1 : {value1}</h1>
      <button className='btn' onClick={() => setValue1(value1 + 1)}>
        click btn1
      </button>

      <h1>value2 : {value2}</h1>
      <button className='btn' onClick={() => setValue2(value2 + 1)}>
        click btn2
      </button>

      <h1>value3 : {value3}</h1>
      <button className='btn' onClick={() => setValue3(value3 + 1)}>
        click btn3
      </button>
    </div>
  )
}
export default T21_61
