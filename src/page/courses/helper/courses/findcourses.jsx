import { useLocation, useNavigate } from 'react-router-dom'
import {
  CalendarOutlined,
  FieldNumberOutlined,
  GlobalOutlined
} from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { GET } from '../../../../utils/api/get'
import { img_url } from '../../../../context/start'
import error from '../../../../img/404.png'
import './findcourses.scss'

function FindCourses() {
  const navigate = useNavigate()
  const [category, setCategory] = useState({})
  const [courses, setCourses] = useState([])
  const location = useLocation()

  useEffect(() => {
    const titleCategory = location.pathname.split('/')[2]
    GET('/categories/' + titleCategory)
      .then(res => res.json())
      .then(data => {
        setCategory(data.filter(e => e.title.split(' ').join('') === titleCategory.split('%20').join(''))[0])
      })
  }, [location.pathname])

  useEffect(() => {
    if (category?.id) {
      GET('/courses/bycategory/' + category.id)
        .then(res => res.json())
        .then(data => setCourses(data))
    }
  }, [category])
  return (
    <>
      <main className='courses_main'>
        {courses?.length
          ? courses.map(e => {
            return (
              <div className='courses_container' key={e?.id}>
                <div onClick={() => navigate('/course/' + e?.title)} className='courses_img'>
                  <span className='courses_premium-logo'>Premium</span>
                  <img
                    src={
                      img_url +
                      e?.image
                    }
                    alt=''
                  />
                </div>

                <div className='courses_descrioption'>
                  <h2 className='courses_descrioption-h2'>{e?.title} </h2>

                  <p className='courses_descrioption-p'>{e?.category}</p>

                  <p className='courses_descrioption-text'>
                    {e?.description}
                  </p>
                  <div className='courses_info'>
                    <div className='courses_info-container'>
                      <p>
                        <span>
                          <FieldNumberOutlined />{' '}
                        </span>
                        {e?.video_count} ta
                      </p>
                      <p>
                        <GlobalOutlined />
                        {e?.lang === 'uz'
                          ? ' O’zbek'
                          : e?.lang === 'ru'
                            ? ' Rus'
                            : e?.lang === 'en'
                              ? ' English'
                              : ' O’zbek'}
                      </p>
                      <p>
                        <CalendarOutlined /> {e?.create}
                      </p>
                    </div>
                    <div
                      className='courses_Link'
                      onClick={() => navigate('/course/' + e?.title)}
                    >
                      <p>Darslikni ko’rish</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
          : <img className='error_image' style={{ margin: '50px auto' }} src={error} alt='zor rasm' />}
      </main>
    </>
  )
}

export default FindCourses
