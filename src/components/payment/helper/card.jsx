import { useNavigate } from "react-router-dom";
import { GET } from "../../../utils/api/get";
import { useEffect, useState } from "react";
import useStart from "../../../hooks/useStart";

function Card() {
    const { token } = useStart()
    const navigate = useNavigate()
    const [user, setUser] = useState();


    useEffect(() => {
        GET('/users/one', token)
            .then(re => re.json())
            .then(data => setUser(data))
    }, [token]);

    const telegram = (el) => {
        const data = `
            Ma'lumotlar
            %0A
            %0Auser: ${user?.email}
            %0Adaraja: ${el.parentNode.children[0].textContent}
            %0Asumma: ${el.parentNode.children[1].textContent}
            %0Amuddat: ${el.parentNode.children[2].textContent.split('/')[1]}
        `
        const token = '5835618193:AAFvt7DXKWZyeo7EbZZMtcfEjL_Z63OOsC0'
        const chatId = '1772591765'

        fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${data}`)
    }

    return (
        <ul className="payment_card">
            <li className="payment_item">
                <span>Oddiy</span>
                <h2>150 000 so’m</h2>
                <p>/ 1 oyga</p>
                <button onClick={(e) => !token ? navigate('/login') : telegram(e.target)}>{token ? 'Kirish' : 'Sign in'}</button>
            </li>
            <li className="payment_item">
                <span>O'rta</span>
                <h2>250 000 so’m</h2>
                <p>/ 3 oyga</p>
                <button onClick={(e) => !token ? navigate('/login') : telegram(e.target)}>{token ? 'Kirish' : 'Sign in'}</button>
            </li>
            <li className="payment_item">
                <span>Yuqori</span>
                <h2>500 000 so’m</h2>
                <p>/ 6 oyga</p>
                <button onClick={(e) => !token ? navigate('/login') : telegram(e.target)}>{token ? 'Kirish' : 'Sign in'}</button>
            </li>
            <li className="payment_item">
                <span>Yillik</span>
                <h2>800 000 so’m</h2>
                <p>/ 12 oyga</p>
                <button onClick={(e) => !token ? navigate('/login') : telegram(e.target)}>{token ? 'Kirish' : 'Sign in'}</button>
            </li>
        </ul>
    );
}

export default Card;