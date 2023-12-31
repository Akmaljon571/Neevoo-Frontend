import { useNavigate } from 'react-router-dom'
import dumaloq from '../../../../img/Ellipse 9.png'
import ustoz from '../../../../img/Ellipse 3.png'
import card2 from '../../../../img/Ellipse 3 (1).png'
import card3 from '../../../../img/Rectangle 8.png'
import burchak from '../../../../img/Frame 29.png'
import './teacher.scss'

function HomeTeacher() {
  const navigate = useNavigate()

  return (
    <div className='home_dumaloq'>
      <div className='home_dumaloq-left'>
        <img
          className='home_dumaloq-img1'
          src={dumaloq}
          alt='home page_image'
        />
        <img
          className='home_dumaloq-img2'
          src={burchak}
          alt='home page_image'
        />
        <div className='home_dumaloq-card1'>
          <img src={card2} alt='home page_image' />
          <p>
            “Lorem ipsum dolor sit amet consectetur. Urna faucibus velit nam
            mattis sapien gravida eget faucibus praesent ”
          </p>
          <span>Jessika Blu</span>
        </div>
        <div className='home_dumaloq-card2'>
          <img src={ustoz} alt='home page_image' />
          <p>
            “Lorem ipsum dolor sit amet consectetur. Urna faucibus velit nam
            mattis sapien gravida eget faucibus praesent ”
          </p>
          <span>Dennis Barett</span>
        </div>
        <div className='home_dumaloq-card3'>
          <span className='home_dumaloq-span'>100+ Ustozlar</span>
          <div>
            <img src={card3} alt='home page _image' />
            <div className='home-header-div'>
              <h2>Anna Karina</h2>
              <span>AI dasturida ishlovchi</span>
            </div>
          </div>
          <div>
            <img src={card3} alt='home page _image' />
            <div className='home-header-div'>
              <h2>Anna Karina</h2>
              <span>AI dasturida ishlovchi</span>
            </div>
          </div>
          <div>
            <img src={card3} alt='home page _image' />
            <div className='home-header-div'>
              <h2>Anna Karina</h2>
              <span>AI dasturida ishlovchi</span>
            </div>
          </div>
        </div>
      </div>
      <div className='home_dumaloq-right'>
        <h2>Bizning onlayn video darsliklar</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Aliquet tincidunt erat sit
          donec nulla. Nec lacinia at vitae elementum. Nulla hendrerit faucibus
          id sagittis a iaculis id. Enim sed morbi feugiat id lectus vulputate
          neque.
        </p>
        <button onClick={() => navigate('/bolim')}>Boshlash</button>
      </div>
    </div>
  )
}

export default HomeTeacher
