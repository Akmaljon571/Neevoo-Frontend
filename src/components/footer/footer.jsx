import { useNavigate } from 'react-router-dom'
import logo from '../../img/2-logo 1.svg'
import tg from '../../img/Group 174.png'
import insta from '../../img/Group 175.png'
import mail from '../../img/ph_instagram-logo.png'
import './footer.scss'

function Footer () {
  const navigate = useNavigate()

  return (
    <footer className='footer'>
      <div className='footer_top'>
        <div className='footer_logo'>
          <img onClick={() => navigate('/')} src={logo} alt='' />
          <p className='footer_lorem'>
            Eduport ta'lim mavzusi, ta'lim markazlari uchun maxsus yaratilgan
            bo'lib, o'qitishga bag'ishlangan va o'quvchilarni jalb qiladi.
          </p>
        </div>
        <ul className='footer_list'>
          <li className='footer_itemH'>Tashkilotimiz</li>
          <li onClick={() => {navigate('/about')}} className='footer_item'>Biz haqimizda</li>
          <li onClick={() => {navigate('/bolim')}} className='footer_item'>Bo’limlar</li>
          <li onClick={() => {navigate('/payment')}} className='footer_item'>To’lov</li>
        </ul>
        <ul className='footer_list2'>
          <li className='footer_itemH'>Aloqa</li>
          <li onClick={() => {navigate('/about')}} className='footer_item'>Biz haqimizda</li>
          <li onClick={() => {navigate('/bolim')}} className='footer_item'>Bo’limlar</li>
          <li onClick={() => {navigate('/payment')}} className='footer_item'>To’lov</li>
        </ul>
        <ul className='footer_list3'>
          <li className='footer_itemH'>Ta’lim berish</li>
          <li onClick={() => {navigate('/about')}} className='footer_item'>Biz haqimizda</li>
          <li onClick={() => {navigate('/bolim')}} className='footer_item'>Bo’limlar</li>
          <li onClick={() => {navigate('/payment')}} className='footer_item'>To’lov</li>
        </ul>
        <ul className='footer_list4'>
          <li className='footer_itemH'>Aloqa</li>
          <li className='footer_item'>Murojaat uchun: +99890 000-00-00</li>
          <li className='footer_item'>09:00-21:00</li>
        </ul>
      </div>
      <hr />
      <div className="footer_bottom">
        <div className='footer_tarmoq'>
            <a href="https://t.me/Shakhboz_24">
                <img src={tg} alt="" />
            </a>
            <a href="lincorteamnt@gmail.com">
                <img src={mail} alt="" />
            </a>
            <a href="https://www.instagram.com/lincor/">
                <img src={insta} alt="" />
            </a>
        </div>
        <p className='footer_barcha'>Barcha huquqlar himoyanlangan 2023</p>
      </div>
    </footer>
  )
}

export default Footer
