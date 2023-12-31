import { useNavigate } from 'react-router-dom'
import {
  CalendarOutlined,
  FieldNumberOutlined,
  GlobalOutlined
} from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { GET } from '../../../utils/api/get'
import { img_url } from '../../../context/start'
import useStart from '../../../hooks/useStart'
import error from '../../../img/search-not-found-5342748-4468820.webp'
import './findcourses.scss'

function FindCourses() {
  const children = ''
  const navigate = useNavigate()
  const { token } = useStart()
  const [courses, setCourses] = useState([])

  useEffect(() => {
    GET('/history', token)
      .then(res => res.json())
      .then(data => {
        setCourses(data[0]?.user_history)
      })
  }, [children, setCourses, token])
  return (
    <>
      <h1 className='hsitory_h1' style={{ margin: '30px 0 50px 0' }}>Avval ko'rilgan Courselar</h1>
      <span>Davom etiring!!!</span>
      <div style={{ minHeight: '200px', marginBottom: '100px', marginTop: '10px' }} className='courses_main'>
        {courses?.length ? (
          courses.map((e, i) => (
            <div className='courses_container' key={e?.history_course?.id}>
              <div onClick={() => navigate('/course/' + e?.history_course?.title)} className='courses_img'>
                <span className='courses_premium-logo'>Premium</span>

                <img src={img_url + e?.history_course?.image} alt='' />
              </div>

              <div className='courses_descrioption'>
                <h2 style={{ color: '#fff' }} className='courses_descrioption-h2'>{e?.history_course?.title} </h2>
                <p style={{ color: '#fff' }} className='courses_descrioption-p'>{e?.history_course?.category}</p>

                <p style={{ color: '#fff' }} className='courses_descrioption-text'>
                  {e?.history_course?.description}
                </p>
                <div style={{ color: '#fff' }} className='courses_info'>
                  <div className='courses_info-container'>
                    <p style={{ color: '#fff', fontSize: '20px' }}>
                      <span>
                        <FieldNumberOutlined />{' '}
                      </span>
                      {e?.history_course?.video_count} ta
                    </p>
                    <p style={{ color: '#fff', fontSize: '15px' }}>
                      <GlobalOutlined />
                      {e?.history_course?.lang === 'uz'
                        ? ' O’zbek'
                        : e?.history_course?.lang === 'ru'
                          ? ' Rus'
                          : e?.history_course?.lang === 'en'
                            ? ' English'
                            : ' O’zbek'}
                    </p>
                    <p style={{ color: '#fff', fontSize: '15px' }}>
                      <CalendarOutlined /> {e?.history_course?.create}
                    </p>
                  </div>
                  <div
                    className='courses_Link'
                    onClick={() => navigate('/course/' + e?.history_course?.title)}
                  >
                    <p>Darslikni ko’rish</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <img className='error_image' style={{ margin: '50px auto' }} src={error} alt='zor rasm' />
        )}
      </div>
    </>
  )
}

export default FindCourses
