import { useState } from 'react'
const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false)
  return <>{showAlert && <Alert />}</>
}

const Alert = () => {
  return <div className='alert alert-success'>周浩偉 212410061</div>
}
export default ToggleChallenge
