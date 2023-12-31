import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GET } from '../../../utils/api/get'
import { img_url } from '../../../context/start'
import useStart from '../../../hooks/useStart'
import Error from '../../../img/search-not-found-5342748-4468820.webp'
import loading from '../../../img/ZZ5H.gif'

function Search() {
  const { headerSearch, setHeaderSearch, setCount, count } = useStart()
  const [list, setList] = useState([])
  const [load, setLoad] = useState(false)
  const navigate = useNavigate()
  const input = useRef()

  const onSearch = e => {
    setLoad(true)
    if (e.target.value !== '') {
      GET('/courses/' + e.target.value.trim())
        .then(re => re.json())
        .then(data => {
          setList(data)
          setLoad(!data.length ? false : true)
        })
    } else {
      setList([])
      setLoad(false)
    }
  }

  const click = e => {
    navigate('/course/' + e.target?.textContent)
    setHeaderSearch(false)
    setCount(count + 1)
  }

  useEffect(() => {
    input.current.value = ''
  }, [headerSearch]);

  return (
    <>
      <div className={!headerSearch ? 'none' : 'header_search--div'}>
        <span className='header_search--span'></span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='22'
          height='22'
          style={{ cursor: 'pointer' }}
          fill='currentColor'
          className='bi bi-search'
          viewBox='0 0 16 16'
        >
          <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
        </svg>
        <input
          onChange={onSearch}
          ref={input}
          type='text'
          placeholder='Write and Search'
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-x'
          viewBox='0 0 16 16'
          onClick={() => setHeaderSearch(false)}
        >
          <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
        </svg>
      </div>
      <ul className={!headerSearch ? 'none' : 'header_search--list'}>
        {list.length && input?.current?.value !== '' ? (
          list.map(e => (
            <li onClick={click} key={e.id}>
              {
                <img
                  className='header_search--list--suc'
                  src={img_url + e.image}
                  alt='header_search'
                />
              }{' '}
              <span>{e.title}</span>
            </li>
          ))
        ) : (
          <img
            style={
              load && input?.current?.value
                ? { width: '100px', marginTop: '80px' }
                : { width: '350px', marginTop: '10px' }
            }
            className='error_image'
            src={load && input?.current?.value ? loading : Error}
            alt=''
          />
        )}
      </ul>
    </>
  )
}

export default Search
