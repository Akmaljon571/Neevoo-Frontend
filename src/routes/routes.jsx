import { Route, Routes } from 'react-router-dom'
import { Courses, Error, History, Home, Login, Registr, Video } from "../page";
import { Bolim } from "../components/bolim/bolim";
import Payment from "../components/payment/payment";
import Parol from '../page/auth/parol/parol';

function Routerr() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bolim" element={<Bolim />} />
      <Route path='/bolim/:id' element={<Courses />} />
      <Route path='/course/:id' element={<Video />} />
      <Route path='/payment' element={<Payment />} />
      {/* <Route path='/about' element={} /> */}
      {/* <Route path='/aloqa' element={} /> */}
      <Route path='/registr' element={<Registr />} />
      <Route path='/login' element={<Login />} />
      {/* <Route path='/profile' element={} /> */}
      <Route path='/history' element={<History />} />
      <Route path='/parol' element={<Parol />} />
      {/* <Route path='/' element={} /> */}
      {/* <Route path='/' element={} /> */}
      {/* <Route path='/' element={} /> */}
      {/* <Route path='/' element={} /> */}
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default Routerr;
