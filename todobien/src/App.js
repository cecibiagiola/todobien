import './App.css';
import './Button/Button.js'
import { Button } from './Button/Button.js';
import Swal from 'sweetalert2'; 


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
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  
  }
  
  return (
    <div className="App">
      <Button 
      text={'Quiero que todo esté bien'}
      onHandleClick= {onHandleClick}/>
    </div>
  );
}

export default App;
