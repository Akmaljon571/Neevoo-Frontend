import error from '../../img/404.png'
import './error.scss'

function Error() {
    return (  
        <img className="error_img" src={error}/>
    );
}

export default Error;