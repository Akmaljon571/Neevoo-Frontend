import { ArrowRightOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { Menu } from 'antd'
import { GET } from '../../utils/api/get'
import { img_url } from '../../context/start'
import logo from '../../img/2-logo 1.svg'
import bolim from '../../img/Frame.svg'
import login from '../../img/log-in.svg'
import uz from '../../img/image 38.svg'
import ru from '../../img/image 36.svg'
import en from '../../img/image 34.svg'
import arrow from '../../img/Polygon 3.svg'
import Modal from './helper/modal'
import useStart from '../../hooks/useStart'
import Search from './helper/search'
import profile from '../../img/Frame 256.png'
import './header.scss'

function Header() {
  const [list, setList] = useState([])
  const [select, setSelect] = useState('uz')
  const {
    setHeaderModal,
    setHeaderSearch,
    headerSearch,
    token,
    count,
    setCount,
    setToken
  } = useStart()
  const navigate = useNavigate()
  const menu = useRef()

  const onSelect = e => {
    if (e.target.className === 'header_option--list') {
      const value =
        e.target.textContent === 'Uzbek'
          ? 'uz'
          : e.target.textContent === 'Rus'
            ? 'ru'
            : e.target.textContent === 'English'
              ? 'en'
              : uz
      setSelect(value)
    }
  }

  useEffect(() => {
    GET('/categories/list')
      .then(re => re.json())
      .then(data => setList(data))
  }, [setList])

  const result = []
  const sanoq = list.length < 6 ? list.length : 6
  for (let i = 0; i < sanoq; i++) {
    const obj = {}
    obj.label = list[i]?.title
    obj.key = list[i]?.id
    obj.icon = (
      <img
        width={30}
        style={{ marginBottom: '-10px' }}
        height={30}
        src={img_url + list[i]?.image}
        alt=''
      />
    )
    result.push(obj)
  }

  const obj = {
    label: `Boshqalar`,
    icon: (
      <ArrowRightOutlined
        style={{ fontSize: '20px', color: 'blue', margin: '0 5px' }}
      />
    ),
    key: '1'
  }
  result.push(obj)

  const items = [
    {
      label: 'Bo’limlar',
      key: 'SubMenu',
      icon: <img src={bolim} alt='bolimcha' />,
      children: [
        {
          type: 'group',
          label: 'Course',
          children: list.length ? result : []
        }
      ]
    }
  ]

  const chiqish = () => {
    localStorage.clear()
    setCount(count + 1)
    setToken('')
    navigate('/')
  }

  const clickMenu = ({ key, domEvent }) => {
    const typeKey = typeof key == 'number' ? 1 : '1'

    if (key !== typeKey) {
      if (domEvent.target.className === 'ant-menu-item-icon') {
        navigate('/bolim/' + domEvent.target.parentNode.lastChild.textContent)
      } else if (
        domEvent.target.className ===
        'ant-menu-item ant-menu-item-active ant-menu-item-selected'
      ) {
        navigate('/bolim/' + domEvent.target.lastChild.textContent)
      } else if (domEvent.target.className === 'ant-menu-title-content') {
        navigate('/bolim/' + domEvent.target.textContent)
      } else {
        navigate('/bolim')
      }
    } else {
      navigate('/bolim')
    }
  }

  return (
    <>
      <header className='header'>
        <nav className='header_nav'>
          <a className='header_link' href='/'>
            <img className='header_logo' src={logo} alt='logo' />
          </a>
          <Menu
            onClick={clickMenu}
            ref={menu}
            mode='horizontal'
            items={items}
            className='header_menu'
          />
          <ul className='header_list'>
            <li onClick={() => navigate('/about')} className='header_item'>
              Biz haqimizda
            </li>
            <li onClick={() => navigate('/payment')} className='header_item'>
              To’lov
            </li>
            <li onClick={() => navigate('/aloqa')} className='header_item'>
              Aloqa
            </li>
          </ul>
          <div className='header_left-father'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='22'
              height='22'
              style={{ cursor: 'pointer' }}
              fill='currentColor'
              className='bi bi-search header_search'
              viewBox='0 0 16 16'
              onClick={() => setHeaderSearch(true)}
            >
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
            </svg>
            <div className='header_select'>
              <div className='header_select--top'>
                <img
                  className='header_select--img'
                  src={
                    select === 'uz'
                      ? uz
                      : select === 'ru'
                        ? ru
                        : select === 'en'
                          ? en
                          : uz
                  }
                  alt=''
                />
                <img src={arrow} alt='' />
              </div>
              <ul onClick={onSelect} className='header_option'>
                <li className='header_option--list'>Uzbek</li>
                <li className='header_option--list'>Rus</li>
                <li className='header_option--list'>English</li>
              </ul>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='26'
              fill='currentColor'
              style={{ position: 'absolute', right: 0 }}
              onClick={() => setHeaderModal(true)}
              className='bi bi-list header_humburger'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
              />
            </svg>
            {!token ? (
              <div onClick={() => navigate('/login')} className='header_login'>
                <img className='header_login--img' src={login} alt='' />
                <span className='header_login--span'>Kirish</span>
              </div>
            ) : (
              <div
                className='header_profile'
                style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
              >
                <img src={profile} alt='profile' />
                <ul className='header_profile-option'>
                  <li onClick={() => navigate('/profile')}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      fill='currentColor'
                      className='bi bi-person'
                      viewBox='0 0 16 16'
                    >
                      <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z' />
                    </svg>
                    Profile
                  </li>
                  <li onClick={() => navigate('/payment')}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      fill='currentColor'
                      className='bi bi-bag-plus'
                      viewBox='0 0 16 16'
                    >
                      <path
                        fillRule='evenodd'
                        d='M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z'
                      />
                      <path d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z' />
                    </svg>
                    Paket
                  </li>
                  <li onClick={() => navigate('/history')}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      fill='currentColor'
                      className='bi bi-clock-history'
                      viewBox='0 0 16 16'
                    >
                      <path d='M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z' />
                      <path d='M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z' />
                      <path d='M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z' />
                    </svg>
                    History
                  </li>
                  <li
                    onClick={chiqish}
                    className='header_profile-option--chiqish'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      fill='currentColor'
                      className='bi bi-box-arrow-left'
                      viewBox='0 0 16 16'
                    >
                      <path
                        fillRule='evenodd'
                        d='M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z'
                      />
                      <path
                        fillRule='evenodd'
                        d='M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z'
                      />
                    </svg>
                    Chiqish
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Modal />
          <Search />
        </nav>
      </header>
      <span
        onClick={() => setHeaderSearch(false)}
        className={!headerSearch ? 'none' : 'bgFixed'}
      ></span>
    </>
  )
}

export default Header
