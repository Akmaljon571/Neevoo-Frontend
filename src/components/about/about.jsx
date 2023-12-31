import about1 from '../../img/about1.png'
import about2 from '../../img/about2.png'
import about3 from '../../img/about3.png'
import about4 from '../../img/about4.png'
import about5 from '../../img/about5.png'
import main_about from '../../img/about_check.png'
import check_circle from '../../img/about_circle.png'
import './about.scss'

export function About() {
    return (
        <>
            <section className="hero">
                <h3 className="hero__heading">
                    NEEVO ta'lim mavzusi, ta'lim markazlari uchun maxsus yaratilgan bo'lib, o'qitishga bag'ishlangan va o'quvchilarni jalb qiladi.
                </h3>
                <div className="hero__images">

                    <div className="hero__wrapper">
                        <img className='hero__img1' src={about1} alt="about1" />
                        <img className='hero__img2' src={about2} alt="about2" />
                    </div>

                    <div className="hero__wrapper">
                        <img className='hero__img3' src={about3} alt="about3" />
                    </div>

                    <div className="hero__wrapper">
                        <img className='hero__img4' src={about4} alt="about4" />
                        <img className='hero__img5' src={about5} alt="about5" />
                    </div>
                </div>
            </section>
            <section className='main'>
                <div className='main__header'>
                    <h3 className='main__header__heading'>NEVOO haqida</h3>
                    <p className='main__header__text'>
                        Qanday targ'ib a'lo qiziquvchanlik hali urinish baxt Gey farovon taassurot ishonch bor edi Har bir kechikish uchun o'lim so'rang uslub Meni degani mumkin mening tomonidan ularda o'z ichiga olgan.
                    </p>
                </div>

                <div className='main__box'>
                    <img className='main__about__img' src={main_about} alt="main_about" />

                    <div className='main__wrapper'>

                        <h4 className='wrapper__heading'>
                            1000 dan ziyod talabalar o'z maqsadlariga erishish uchun biz bilan qo'shildi
                        </h4>

                        <p className='main__header__text wrapper__text'>
                            Qanday targ'ib qilish zo'r qiziquvchanlik hali urinish baxt Gey farovon taassurot ishonchi bor edi har kechikish uchun o'lim so'rash uslub Men degani mumkin my by ularda Ekstremite endi begonalar o'z ichiga  Samimiy to'plangan mamnun olib endi abadiy nihoyatda mahrum
                        </p>

                        <p className='main__header__text wrapper__text'>
                            Baxt farovon taassurot ishonch bor edi Har bir kechikish uchun Ularda Ekstremite endi begonalar o'z ichiga nonushta unga nutq Samimiyat yig'ilgan mamnun olib endi abadiy nihoyatda mahrum
                        </p>

                        <ul className='wrapper__list'>
                            <li className='wrapper__item'>
                                <img src={check_circle} alt="check" />
                                <p className='main__header__text'>O'rnatish va o'rnatish kamroq vaqt talab etadi</p>
                            </li>
                            <li className='wrapper__item'>
                                <img src={check_circle} alt="check" />
                                <p className='main__header__text'>Professional va foydalanish uchun qulay dasturiy ta'minot</p>
                            </li>
                            <li className='wrapper__item'>
                                <img src={check_circle} alt="check" />
                                <p className='main__header__text'>Pikselli dizaynga ega har qanday qurilma uchun juda mos</p>
                            </li>
                            <li className='wrapper__item'>
                                <img src={check_circle} alt="check" />
                                <p className='main__header__text'>O'rnatish va o'rnatish juda tez</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}