import { useNavigate } from 'react-router-dom';
import error from '../../img/404.png'
import './error.scss'

function Error() {
    const navigate = useNavigate()

    return (      
        <div className='error'>
            <img className="error_image" src={error} alt='error_image'/>
            <h1>404</h1>
            <p>Nimadir xato ketdi yoki bu sahifa endi mavjud emas.</p>
            <button onClick={() => navigate(-1)}>Bosh sahifaga qaytish</button>
        </div>
    );
}

export default Error;