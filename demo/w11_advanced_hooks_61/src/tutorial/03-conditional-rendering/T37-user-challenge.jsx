import { useState } from 'react'
const UserChallenge_61 = () => {
  const [user, setUser] = useState(null)
  const Login = () => {
    setUser({ name: '周浩偉' })
  }
  const Logout = () => {
    setUser(null)
  }
  return (
    <>
      {user ? (
        <div>
          <h4>hello,{user.name}</h4>
        </div>
      ) : (
        <div>
          <h4>please login</h4>
          <button className='btn' onClick={Login}>
            login
          </button>
        </div>
      )}
    </>
  )
}

export default UserChallenge_61
