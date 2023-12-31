import contact_location from '../../img/contact__location.png'
import contact_phone from '../../img/contact__phone.png'
import contact_mail from '../../img/contact_mail.png'
import contact_pochta from '../../img/contact_pochta.png'
import contact_w_location from '../../img/contact_w_loc.png'
import contact_w_phone from '../../img/contact_w_phone.png'
import contact_w_mail from '../../img/contact_w_mail.png'
import './contact.scss'

export function Contact() {
    return (
        <>
            <section className='contact__hero'>
                <h2 className='contact__heading'>Biz bilan bog'lanish</h2>
                <h3 className='contact__heading2'>Biz sizga yordam berish uchun doim tayyormiz!</h3>

                <div className='contact__box'>

                    <div className='contact__unique__wrapper'>

                        <ul className='contact__unique__list contact__list'>

                            <li className='contact__u__item'>
                                <h4 className='contact__u__item__heading'>Mijozlarni qo'llab-quvvatlash</h4>
                            </li>

                            <li className='contact__item'>
                                <img src={contact_w_location} alt="location" />
                                <h4 className='contact__u__item__location'>Toshkent shahar, Yashnaobod tumani, 25-uy, 6-xonadon</h4>
                            </li>

                            <li className='contact__item'>
                                <img src={contact_w_phone} alt="phone" />
                                <a href='tel:+998941234567' className='contact__u__item__phone'>+99894 123-45-67</a>
                            </li>

                            <li className='contact__item'>
                                <img src={contact_w_mail} alt="mail" />
                                <a href="mailto:?neevoo@gmail.com" className='contact__u__item__mail'>neevoo@gmail.com</a>
                            </li>

                        </ul>

                    </div>
                    <div className='contact__wrapper'>

                        <ul className='contact__list'>

                            <li className='contact__item'>
                                <h4 className='contact__item__heading'>Telefon raqam</h4>
                            </li>

                            <li className='contact__item'>
                                <img className='contact__item__locimg' src={contact_location} alt="location" />
                                <h4 className='contact__item__location'>Toshkent shahar, Yashnaobod tumani, 25-uy, 6-xonadon</h4>
                            </li>

                            <li className='contact__item'>
                                <img className='contact__item__phoneimg' src={contact_phone} alt="phone" />
                                <a href='tel:+998941234567' className='contact__item__phone'>+99894 123-45-67</a>
                            </li>

                            <li className='contact__item'>
                                <img className='contact__item__mailimg' src={contact_mail} alt="mail" />
                                <a href="mailto:?neevoo@gmail.com" className='contact__item__mail'>neevoo@gmail.com</a>
                            </li>

                        </ul>

                    </div>
                    <div className='contact__wrapper'>

                        <ul className='contact__list'>

                            <li className='contact__item'>
                                <h4 className='contact__item__heading'>Bosh ofis manzili</h4>
                            </li>

                            <li className='contact__item'>
                                <img src={contact_location} alt="location" />
                                <h4 className='contact__item__location'>Toshkent shahar, Yashnaobod tumani, 25-uy, 6-xonadon</h4>
                            </li>

                            <li className='contact__item'>
                                <img src={contact_phone} alt="phone" />
                                <a href='tel:+998941234567' className='contact__item__phone'>+99894 123-45-67</a>
                            </li>

                            <li className='contact__item'>
                                <img src={contact_mail} alt="mail" />
                                <a href="mailto:?neevoo@gmail.com" className='contact__item__mail'>neevoo@gmail.com</a>
                            </li>

                        </ul>

                    </div>

                </div>

            </section>
            <section className='contact--main'>
                <img className='contact--main--img' src={contact_pochta} alt="contact_pochta" />
                <form className='contact--main--box'>
                    <h3 className='contact--main--heading'>Bizga xabar qoldiring!</h3>
                    <label >
                        Ism familiyangiz
                        <input type="text" />
                    </label>

                    <label>
                        Email pochta
                        <input type="email" />
                    </label>
                    <label>
                        Xabar yozish
                        <textarea className='contact--main--textarea'></textarea>
                    </label>

                    <button type="submit" className='contact--main--subbtn'>Yuborish</button>
                </form>
            </section>
        </>
    )
}