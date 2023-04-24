import img from '../../../img/image 30.png'

function PaymentTop () {
  return (
    <div className='payment'>
      <div className='payment-top'>
        <div className='payment-left'>
          <h1>NEEVOO Premium</h1>
          <p>
            Coursehunter Premium - kurs ovchisining barcha kurslariga kirish,
            onlayn ko'rish, oflayn yuklab olish (bir marta bosish bilan kursni
            yuklab olish), kurslarga buyurtma berish.
          </p>
        </div>
        <img src={img} alt='payment' />
      </div>
    </div>
  )
}

export default PaymentTop
