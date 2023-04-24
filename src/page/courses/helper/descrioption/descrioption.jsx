import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { GET } from '../../../../utils/api/get'
import './descrioption.scss'

function Descrioption () {
  const [category, setCategory] = useState([])
  const location = useLocation()

  useEffect(() => {
    const titleCategory = location.pathname.split('/')[2]
    GET('/categories/' + titleCategory)
      .then(res => res.json())
      .then(data => {
        setCategory(data.filter(e => e.title.split(' ').join('') === titleCategory.split('%20').join('')))
      })
  }, [location.pathname])

  return (
    <>
      {category?.length ? (
        category.map(e => {
          return (
            <div style={{marginBottom: '100px', marginTop: '32px'}} className='descrioption' key={e?.id}>
              <img
                className='descrioption_img'
                src={'https://storage.googleapis.com/course_hunter/' + e?.image}
                alt=''
                width={'100px'}
                height={'100px'}
              />
              <div className='descrioption_container'>
                <h1 className='descrioption_container--h1'>
                  {e?.title} - Video darsliklar, kurslar, o'quv qo'llanmalar
                </h1>
                <p className='descrioption_container--p'>
                  {e?.title} - {e?.description}
                </p>
              </div>
            </div>
          )
        })
      ) : (
        null
      )}
    </>
  )
}

export default Descrioption
