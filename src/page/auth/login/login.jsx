import { useRef } from 'react'
import { POST } from '../../../utils/api/post'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import image from '../../../img/image 27 (1).png'
import mail from '../../../img/mail.svg'
import lock from '../../../img/lock.svg'
import useStart from '../../../hooks/useStart'
import './login.scss'

function Login() {
  const email = useRef()
  const password = useRef()
  const [messageApi, contextHolder] = message.useMessage();
  const { setToken } = useStart()
  const navigate = useNavigate()
  const key = 'updatable';

  const login = () => {
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
      email: email.current.value,
      password: password.current.value
    }

    if (obj.email !== '' && obj.password !== '') {
      messageApi.open({
        key,
        type: 'loading',
        content: 'Loading...'
      })
      POST('/users/login', obj)
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
              duration: 2,
            });
          } else {
            messageApi.open({
              key,
              type: 'error',
              content: 'Loaded!',
              duration: 2,
            });
          }
        })
    } else {
      messageApi.open({
        key,
        type: 'error',
        content: 'Malumotlaringizni kiriting!',
        duration: 2,
      });
    }
  }

  return (
    <div className='login'>
      <div className='login_left'>
        <h2 className='login_h2'>Eng katta jamiyatimizga xush kelibsiz </h2>
        <p className='login_p'>Keling, bugun yangi narsalarni o'rganamiz!</p>
        <img src={image} alt='boy' />
      </div>
      <div className='login_right'>
        <h2 className='login_right-h2'>NEEVOOga kiring!</h2>
        <p className='login_right-p'>yoki <span onClick={() => navigate('/registr')}>Ro’yxatdan o’tish</span></p>
        <div className='login_right-email'>
          <h3>Email pochta</h3>
          <div>
            <img src={mail} alt='' />
            <input ref={email} type='email' placeholder='E-mail' />
          </div>
        </div>
        <div className='login_right-password'>
          <h3>Parol</h3>
          <div>
            <img src={lock} alt='' />
            <input ref={password} type='password' placeholder='Password' />
            <span>
              Sizning parolingiz kamida 8 ta belgidan iborat bo'lishi kerak
            </span>
          </div>
        </div>
        <span className='login_right-parol' onClick={() => navigate('/parol')}>Parolni unutdingizmi?</span>
        <button onClick={login} className='login_right-btn'>
          Kirish
        </button>
        {contextHolder}
      </div>
    </div>
  )
}

export default Login
