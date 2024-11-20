import { useState } from 'react'
const ToggleChallenge_61 = () => {
  const [showAlert, setShowAlert] = useState(false)
  return (
    <>
      <button onClick={() => setShowAlert(!showAlert)}>toggle alert</button>
      {showAlert && <Alert />}
    </>
  )
}

const Alert = () => {
  return <div className='alert alert-success'>周浩偉 212410061</div>
}
export default ToggleChallenge_61
