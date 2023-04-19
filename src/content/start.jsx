import { createContext, useState } from 'react'

export const host = 'https://neevoo.lincor.uz/v1'
export const img_url = 'https://storage.googleapis.com/course_hunter/'
export const State = createContext()

export const StatePriveder = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem('user_token')) || ''
  )
  const [headerModal, setHeaderModal] = useState(false)
  const [headerSearch, setHeaderSearch] = useState(false)
  const [count, setCount] = useState(0)

  const data = {
    token,
    setToken,
    headerModal,
    setHeaderModal,
    headerSearch,
    setHeaderSearch,
    count,
    setCount
  }

  return <State.Provider value={data}>{children}</State.Provider>
}
