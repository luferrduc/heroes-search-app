
import { useNavigate } from 'react-router';

export const NotFoundPage = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    const previousUrl = window.history.state?.idx;

    if (previousUrl) {
      navigate(-1); 
    } else {
      navigate('/');
    }
  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-1 text-danger">404</h1>
        <p className="lead">Oops! Página no encontrada.</p>
        <p>
          La página que buscas no existe o ha sido movida
        </p>
        <button className="btn btn-primary" onClick={handleBack}> Regresar </button>
      </div>
    </div>
  );
};


