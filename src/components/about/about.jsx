import './about.scss'
import about1 from '../../img/about1.png'
import about2 from '../../img/about2.png'
import about3 from '../../img/about3.png'
import about4 from '../../img/about4.png'
import about5 from '../../img/about5.png'

export function About() {
    return (
        <>
        <section className="hero">
            <h3 className="hero__heading">
                NEEVO ta'lim mavzusi, ta'lim markazlari uchun maxsus yaratilgan bo'lib, o'qitishga bag'ishlangan va o'quvchilarni jalb qiladi.
            </h3>
            <div className="hero__images">

                <div className="hero__wrapper">
                    <img className='hero__img1' src={about1}alt="about1" />
                    <img className='hero__img2' src={about2} alt="about2" />
                </div>

                <div className="hero__wrapper">
                    <img className='hero__img3' src={about3} alt="about3" />
                </div>
                
                <div className="hero__wrapper">
                    <img className='hero__img4' src={about4}alt="about4" />
                    <img className='hero__img5' src={about5} alt="about5" />
                </div>
            </div>
        </section>
        </>
    )
}