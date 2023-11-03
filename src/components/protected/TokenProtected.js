import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function TokenProtected({ children }) {
  const data = useSelector((state) => state.authLoginStore);

  const navigate = useNavigate();

  useEffect(() => {
    if (data.token === null) {
      navigate('/');
    }
  }, []);

  return children;
}

export default TokenProtected;
