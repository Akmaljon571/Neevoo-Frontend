import { useEffect, useRef, useState } from 'react'
import useStart from '../../../hooks/useStart'
import { GET } from '../../../utils/api/get'
import { img_url } from '../../../context/start'
import { useNavigate } from 'react-router-dom'

function VideoHelper({ children }) {
  const [videos, setVideos] = useState([])
  const [active, setActive] = useState(false)
  const [one, setOne] = useState({})
  const { token } = useStart()
  const navigate = useNavigate()
  const videoRef = useRef(null);

  useEffect(() => {
    if (children) {
      GET('/video/by_course/' + children, token)
        .then(re => re.json())
        .then(data => {
          setVideos(data)
          setActive(data.length ? data[0]?.video_active : true)
          setOne(img_url + data[0]?.link)
          if (data[0]?.video_active) {
            videoRef.current.src = img_url + data[0]?.link;
            videoRef.current.load();
          }
        })
    }
  }, [children, setVideos, setOne, setActive, token])

  const handleClick = (data) => {
    setOne(img_url + data)
    if (active) {
      videoRef.current.src = img_url + data;
      videoRef.current.load();
    }
  }

  return (
    <div className='video video_father'>
      <div className='video_left'>
        {active ? (
          <video
            controls
            muted
            onCanPlayThrough={() => videoRef.current?.play()}
            ref={videoRef}
            autoPlay={'autoplay'}
            preload='auto'
            loop
            className='video_tag'
          >
            <source src={one} type='video/mp4' />
          </video>
        ) : (
          <div className='video_premium'>
            <p>
              Ushbu material pullik obunada. Premium obunaga ega bo'ling va
              Design Mobile Apps: UI, UX va Adobe XD & PSda prototiplash va
              boshqa barcha kurslarni hozir tomosha qiling!
            </p>
            <button onClick={() => navigate('/payment')}>Premium</button>
          </div>
        )}
      </div>
      <ul className='video_right'>
        {videos.length
          ? videos.map((e, i) => (
            <li
              onClick={() => handleClick(e?.link)}
              key={i}
              className={
                e?.link === one?.split('/').at(-1)
                  ? 'video_item video_active'
                  : 'video_item'
              }
            >
              <div className='video_item-top'>
                <p>{e?.sequence}-Dars</p>
                <span>{e?.duration}</span>
              </div>
              <h3>{e?.text}</h3>
            </li>
          ))
          : null}
      </ul>
    </div>
  )
}

export default VideoHelper
