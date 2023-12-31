
import { useLocation } from 'react-router-dom'
import { GET } from '../../../utils/api/get'
import { useEffect, useState } from 'react'
import { img_url } from '../../../context/start'
import VideoHelper from './video'
import FindCourses from './courses/findcourses'

function Hero() {
  const [course, setCourse] = useState({})
  const location = useLocation()
  const { count } = useState()

  useEffect(() => {
    const param = location.pathname.split('/')[2].split('%20').join(' ')
    GET('/courses/' + param)
      .then(re => re.json())
      .then(data => setCourse(data[0]))
  }, [count, location.pathname])

  return (
    <div className='video'>
      <h1>
        Malakali oqituvchi tomonidan {course.category} kursida dars otish uchun
        sizga {course.title} coursini taklif qiladilar
      </h1>
      <p>
        Mobil ilovalarni loyihalash: Adobe XD va PS da UI, UX va prototiplash
      </p>
      <div className='video_div'>
        <img className='video_img' src={img_url + course?.image} alt='' />
        <div className='video_div-right'>
          <ul className='video_div-list'>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='22'
                fill='currentColor'
                className='bi bi-globe'
                viewBox='0 0 16 16'
              >
                <path d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z' />
              </svg>
              <p>
                Til
                <span>
                  {course.lang === 'uz'
                    ? 'O’zbek'
                    : course.lang === 'ru'
                      ? 'Rus'
                      : course.lang === 'en'
                        ? 'English'
                        : 'O’zbek'}
                </span>
              </p>
            </li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='22'
                fill='currentColor'
                className='bi bi-play-circle'
                viewBox='0 0 16 16'
              >
                <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                <path d='M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z' />
              </svg>
              <p>
                Videolar soni:
                <span>{course?.video_count} ta</span>
              </p>
            </li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='22'
                fill='currentColor'
                className='bi bi-star'
                viewBox='0 0 16 16'
              >
                <path d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z' />
              </svg>
              <p>
                Bo’lim
                <span>{course.category}</span>
              </p>
            </li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='22'
                fill='currentColor'
                className='bi bi-calendar-check'
                viewBox='0 0 16 16'
              >
                <path d='M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z' />
                <path d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z' />
              </svg>
              <p>
                Joylangan sanasi
                <span>{course.create}</span>
              </p>
            </li>
          </ul>
          <div className='video_div-description'>{course.description}</div>
        </div>
      </div>
      <VideoHelper>{course.id}</VideoHelper>
      <FindCourses>{course}</FindCourses>
    </div>
  )
}

export default Hero
