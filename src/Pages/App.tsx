import Cronometro from '../Components/Cronometro';
import Formulario from '../Components/Formulario';
import Lista from '../Components/Lista';
import './style.scss'

function App() {
  return (
    <div className="AppStyle">
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
