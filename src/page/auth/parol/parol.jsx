import { useRef, useState } from 'react'
import { POST } from '../../../utils/api/post'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import image from '../../../img/image 27 (1).png'
import mail from '../../../img/mail.svg'
import lock from '../../../img/lock.svg'
import '../registr/registr.scss'

function Parol() {
  const email = useRef()
  const password = useRef()
  const password2 = useRef()
  const inputCode = useRef()
  const [messageApi, contextHolder] = message.useMessage()
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
    POST('/users/parol/', active)
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

    const obj = {
      email: email.current.value
    }

    if (obj.email !== '') {
      messageApi.open({
        key,
        type: 'loading',
        content: 'Loading...'
      })
      POST('/users/parol', obj)
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
  }

  const code = () => {
    const obj = {
      password: password.current.value,
      newPassword: password2.current.value
    }

    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...'
    })
    POST('/users/parol/email/' + inputCode.current?.value?.trim(), obj)
      .then(re => re.json())
      .then(data => {
        if (data.status === 200) {
          navigate('/login')
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
        <h2 className='registr_right-h2'>Parolni tiklash</h2>
        {!active?.email ? (
          <>
            <p className='registr_right-p'>
              yoki <span onClick={() => navigate('/login')}>qaytish</span>
            </p>
            <div className='registr_right-email'>
              <div>
                <img src={mail} alt='' />
                <input ref={email} type='email' placeholder='E-mail' />
              </div>
            </div>
            <button onClick={registr} className='registr_right-btn'>
              Jonatish
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
            <div className='registr_right-password'>
              <h3>Parol</h3>
              <div>
                <img src={lock} alt='' />
                <input ref={password} type='password' placeholder='*********' />
              </div>
            </div>
            <div style={{ marginBottom: 30 }} className='registr_right-password1'>
              <h3>Parolni Takrorlash</h3>
              <div>
                <img src={lock} alt='' />
                <input
                  ref={password2}
                  type='password'
                  placeholder='*********'
                />
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

export default Parol
