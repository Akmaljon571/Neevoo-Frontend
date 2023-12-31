import { GET } from '../../../../utils/api/get';
import { useEffect, useState } from 'react';
import kampyuter1 from '../../../../img/monitor.png'
import kampyuter2 from '../../../../img/monitor (2).png'
import kampyuter3 from '../../../../img/monitor (1).png'
import kampyuter4 from '../../../../img/monitor (3).png'
import './dars.scss'

function Dars() {
    const [data, setData] = useState({});


    useEffect(() => {
        GET('/history/count')
            .then(re => re.json())
            .then(baza => setData(baza))
    }, []);
    return (
        <ul className='dars'>
            <li className='dars_item1'>
                <img src={kampyuter1} alt="kampyuter" />
                <p><span>Yo'nalishlar:</span>{data?.yonalish}+</p>
            </li>
            <li className='dars_item2'>
                <img src={kampyuter2} alt="kampyuter" />
                <p><span>Course:</span>{data.course}+</p>
            </li>
            <li className='dars_item3'>
                <img src={kampyuter3} alt="kampyuter" />
                <p><span>Videolar:</span>{data.video}+</p>
            </li>
            <li className='dars_item4'>
                <img src={kampyuter4} alt="kampyuter" />
                <p><span>O'quvchilar:</span>{data.user}+</p>
            </li>
        </ul>
    );
}

export default Dars;