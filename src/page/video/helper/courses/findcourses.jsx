import { useNavigate } from 'react-router-dom'
import {
  CalendarOutlined,
  FieldNumberOutlined,
  GlobalOutlined
} from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { GET } from '../../../../utils/api/get'
import './findcourses.scss'
import { img_url } from '../../../../context/start'

function FindCourses({ children }) {
  const navigate = useNavigate()
  const [category, setCategory] = useState({})
  const [courses, setCourses] = useState([])

  useEffect(() => {
    GET('/categories/' + children.category)
      .then(res => res.json())
      .then(data => {
        setCategory(data.filter(e => e.title === children.category)[0])
      })
  }, [children])
  useEffect(() => {
    if (category?.id) {
      GET('/courses/bycategory/' + category.id)
        .then(res => res.json())
        .then(data => {
          setCourses(data.filter(e => e.id !== children.id))
        })
    }
  }, [category, children])

  return (
    <>
      <div style={{ minHeight: '200px', marginBottom: '100px' }} className='courses_main'>
        {courses?.length ? (
          courses.map((e, i) => (
            <div className='courses_container' key={e?.id}>
              {i < 3 ? (
                <>
                  <div onClick={() => navigate('/course/' + e?.title)} className='courses_img'>
                    <span className='courses_premium-logo'>Premium</span>

                    <img src={img_url + e?.image} alt='' />
                  </div>

                  <div className='courses_descrioption'>
                    <h2 style={{ color: '#fff' }} className='courses_descrioption-h2'>{e?.title} </h2>
                    <p style={{ color: '#fff' }} className='courses_descrioption-p'>{e?.category}</p>

                    <p style={{ color: '#fff' }} className='courses_descrioption-text'>
                      {e?.description}
                    </p>
                    <div style={{ color: '#fff' }} className='courses_info'>
                      <div className='courses_info-container'>
                        <p style={{ color: '#fff', fontSize: '20px' }}>
                          <span>
                            <FieldNumberOutlined />{' '}
                          </span>
                          {e?.video_count} ta
                        </p>
                        <p style={{ color: '#fff', fontSize: '15px' }}>
                          <GlobalOutlined />
                          {e?.lang === 'uz'
                            ? ' O’zbek'
                            : e?.lang === 'ru'
                              ? ' Rus'
                              : e?.lang === 'en'
                                ? ' English'
                                : ' O’zbek'}
                        </p>
                        <p style={{ color: '#fff', fontSize: '15px' }}>
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
                </>
              ) : null}
            </div>
          ))
        ) : (
          null
        )}
      </div>
    </>
  )
}

export default FindCourses
