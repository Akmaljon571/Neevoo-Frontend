import { useEffect, useState } from 'react'
import { GET } from '../../../../utils/api/get'
import { img_url } from '../../../../context/start'
import { useNavigate } from 'react-router-dom'
import './course.scss'

function HomeCourse() {
  const [category, setCategory] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    GET('/categories/list')
      .then(re => re.json())
      .then(baza => setCategory(baza))
  }, [])

  return (
    <div className='home_course'>
      <h2 className='home_course-h2'>Bizning onlayn video darsliklar</h2>
      <p className='home_course-p'>
        Ixtisoslashgan tashkilotlarning yuzlab kurslaridan tanlang
      </p>
      <ul className='home_course-list'>
        {category.length
          ? category.map((e, i) => (
            i < 13 ? <li onClick={() => navigate('/bolim/' + e.title)} className='home_course-item' key={e.id}>
              <img src={img_url + e?.image} alt='' />
              <span>{e.title}</span>
            </li> : null
          ))
          : null}
      </ul>
      <button onClick={() => navigate('/bolim')} className='home_course-btn'>Barcha bo’limlarni ko’rish</button>
    </div>
  )
}

export default HomeCourse
