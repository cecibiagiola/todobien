import './App.css';
import './Button/Button.js'
import { Button } from './Button/Button.js';
import Swal from 'sweetalert2';

import Footer from './Footer/Footer';
import { Banner } from './Banner/Banner';
import { Subtitle } from './Subtitle/Subtitle';



function App() {
  
  const onHandleClick = ()=> {
    let timerInterval
    Swal.fire({
      title: 'Realizando cambios',
      html: 'Esto puede tardar unos segundos <b></b>.', 
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        
        Swal.fire(
          'Listo!',
          'Ya todo está bien 👍🏽',
          'success'
        )
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  
  }
  
  return (
    <div className="App">
      
      <Banner 
      title={'Deja de ser infeliz.'}
            />
      <Subtitle
      subtitle={'Cambia tu vida con un click'}
      />
      <Button 
      text={'QUIERO QUE TODO ESTÉ BIEN👍🏽'}
      onHandleClick= {onHandleClick}/>
      <Footer />
    </div>
  );
}

export default App;
