import { useRef, useState } from 'react'
import { POST } from '../../../utils/api/post'
import { useNavigate } from 'react-router-dom'
import { host } from '../../../context/start'
import { message } from 'antd'
import image from '../../../img/image 27 (1).png'
import mail from '../../../img/mail.svg'
import lock from '../../../img/lock.svg'
import useStart from '../../../hooks/useStart'
import './registr.scss'

function Registr() {
  const email = useRef()
  const password = useRef()
  const password2 = useRef()
  const inputCode = useRef()
  const [messageApi, contextHolder] = message.useMessage()
  const { setToken } = useStart()
  const [active, setActive] = useState({})
  const [vaqt, setVaqt] = useState(0)
  const [qayta, setQayta] = useState(true)
  const navigate = useNavigate()

  setTimeout(() => {
    if (vaqt > 1) {
      setVaqt(vaqt - 1)
    } else {
      setVaqt(0)
      setQayta(false)
    }
  }, 1000)

  const key = 'updatable'

  const retry = () => {
    POST('/users/registr', active)
      .then(re => re.json())
      .then(data => {
        if (data.status === 200) {
          setVaqt(59)
          setQayta(true)
        } else {
          messageApi.open({
            key,
            type: 'error',
            content: 'Loaded!',
            duration: 2
          })
        }
      })
  }

  const registr = () => {
    const emaill = email.current.value.split('@')[1] === 'gmail.com'
    if (!emaill) {
      return messageApi.open({
        key,
        type: 'error',
        content: 'Malumotlaringizni togri kiriting!',
        duration: 2
      })
    }

    if (password.current.value === password2.current.value) {
      const obj = {
        email: email.current.value,
        password: password.current.value
      }

      if (obj.email !== '' && obj.password !== '') {
        messageApi.open({
          key,
          type: 'loading',
          content: 'Loading...'
        })
        POST('/users/registr', obj)
          .then(re => re.json())
          .then(data => {
            if (data.status === 200) {
              setQayta(true)
              setVaqt(59)
              setActive(obj)
            } else {
              messageApi.open({
                key,
                type: 'error',
                content: 'Loaded!',
                duration: 2
              })
            }
          })
      } else {
        messageApi.open({
          key,
          type: 'error',
          content: 'Malumotlaringizni kiriting!',
          duration: 2
        })
      }
    } else {
      messageApi.open({
        key,
        type: 'error',
        content: 'Malumotlaringizni togri kiriting!',
        duration: 2
      })
    }
  }

  const code = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...'
    })
    fetch(
      host + '/users/registr/email/' + inputCode.current?.value?.trim()
    )
      .then(re => re.json())
      .then(data => {
        if (data.status === 201) {
          setToken(data.token)
          localStorage.setItem('user_token', JSON.stringify(data.token))
          navigate('/bolim')
          messageApi.open({
            key,
            type: 'success',
            content: 'Loaded!',
            duration: 2
          })
        } else {
          messageApi.open({
            key,
            type: 'error',
            content: 'Kiritilgan kod noto’g’ri!',
            duration: 2
          })
        }
      })
  }

  return (
    <div className='registr'>
      <div className='registr_left'>
        <h2 className='registr_h2'>Eng katta jamiyatimizga xush kelibsiz</h2>
        <p className='registr_p'>Keling, bugun yangi narsalarni o'rganamiz!</p>
        <img src={image} alt='boy' />
      </div>
      <div className='registr_right'>
        <h2 className='registr_right-h2'>Ro’yxatdan o’tish!</h2>
        {!active?.email ? (
          <>
            <p className='registr_right-p'>
              yoki <span onClick={() => navigate('/login')}>Kirish</span>
            </p>
            <div className='registr_right-email'>
              <h3>Email manzil</h3>
              <div>
                <img src={mail} alt='' />
                <input ref={email} type='email' placeholder='E-mail' />
              </div>
            </div>
            <div className='registr_right-password'>
              <h3>Parol</h3>
              <div>
                <img src={lock} alt='' />
                <input ref={password} type='password' placeholder='*********' />
              </div>
            </div>
            <div className='registr_right-password1'>
              <h3>Parolni Takrorlash</h3>
              <div>
                <img src={lock} alt='' />
                <input
                  ref={password2}
                  type='password'
                  placeholder='*********'
                />
                <label>
                  <input type='checkbox' />
                  Ro'yxatdan o'tish orqali xizmat ko'rsatish shartlariga rozilik
                  bildirasiz
                </label>
              </div>
            </div>
            <button onClick={registr} className='registr_right-btn'>
              Kirish
            </button>
          </>
        ) : (
          <>
            <p className='registr_right-p'>
              <b>{active.email}</b> Email pochtasiga sms xabar yuborildi, sms
              kodni kiriting
            </p>
            <div className='registr_right-email'>
              <div>
                <input ref={inputCode} type='text' placeholder='12345' />
              </div>
            </div>
            {!qayta ? (
              <p
                style={{ marginBottom: '20px' }}
                onClick={retry}
                className='registr_right-qayta'
              >
                Qayta jonatish
              </p>
            ) : (
              <label style={{ marginBottom: '20px' }}>
                Kodni 0:{String(vaqt).length === 2 ? vaqt : `0${vaqt}`} soniyadan
                so‘ng qayta yuborish mumkin
              </label>
            )}

            <button onClick={code} className='registr_right-btn'>
              Davom etish
            </button>
          </>
        )}
        {contextHolder}
      </div>
    </div>
  )
}

export default Registr
