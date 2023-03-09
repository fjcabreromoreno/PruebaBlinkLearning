import { useNavigate } from 'react-router-dom';

import StarsButton from '../../components/StarsButton';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>Bienvenido a tu app de ejercicios</h1>
        <p>Pulsa CONTINUAR para ir al listado de ejercicios</p>
      </div>

      <div className="buttonContainer">
        <StarsButton
          title="Continuar"
          onHandleClick={() => navigate('/tasks')}
        />
      </div>
    </>
  );
}
