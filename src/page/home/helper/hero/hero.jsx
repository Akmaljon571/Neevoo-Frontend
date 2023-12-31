import { useNavigate } from 'react-router-dom';
import play from '../../../../img/play-circle.svg'
import nike from '../../../../img/check-circle.svg'
import person from '../../../../img/Group 1.png'
import persons from '../../../../img/Group 3 (1).png'
import star from '../../../../img/Star 1.png'
import book from '../../../../img/book-open.svg'
import star2 from '../../../../img/Star 2.svg'
import './hero.scss'

function Hero() {
    const navigate = useNavigate()

    return (
        <div className="hero">
            <div className="hero_left">
                <h1 className="hero_h1">
                    Biz bilan darslarni maksimal darajada o’rganing
                </h1>
                <p className="hero_p">Mutaxassislar tomonidan yangi ko'nikmalarga ega bo'lishga yordam berish uchun o'rgatiladi.</p>
                <div className="hero_reklama">
                    <div className="hero_reklama-left">
                        <img className='hero_reklama-left--img' src={nike} alt="nike" />
                        <span className='hero_reklama-left--span'>Mutaxassislar bilan o’rganing</span>
                    </div>
                    <div className="hero_reklama-right">
                        <img className='hero_reklama-right--img' src={nike} alt="nike" />
                        <span className='hero_reklama-right--span'>Sertifikatga ega bo’ling</span>
                    </div>
                </div>
                <div className="hero_btn">
                    <button className='hero_btn-boshla' onClick={() => navigate('/bolim')}>Boshlash</button>
                    <button className='hero_btn-bolim' onClick={() => navigate('/bolim')}>
                        <img src={play} alt="" />
                        <span>Video darslik ko’rish</span></button>
                </div>
            </div>
            <div className="hero_right">
                <img className='hero_person' src={person} alt="person" />
                <img className='hero_persons' src={persons} alt="person2" />
                <img className='hero_star' src={star} alt="star" />
                <img className='hero_book' src={book} alt="book" />
                <img className='hero_star2' src={star2} alt="star2" />
            </div>
        </div>
    );
}

export default Hero;