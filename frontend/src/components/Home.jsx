import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import api from '../utils/api';

export default function Home() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);

  useEffect(() => {
    if (!cookies.token) {
      navigate('/login');
    }
    
    api.post('/api/home',
      { }, 
      { withCredentials: true }
    )
    .then(function (response) {
      //Nothing Yet
      console.log(reponse)
    })
    .catch(function (error) {
      console.log(error)
      if (error.status == 401) {
        removeCookie('token');
        navigate('/login');
      }
    });
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  return (
    <>
      <div className="homePage">
        <h1>Welcome</h1>
        <button onClick={Logout}>LOGOUT</button>
      </div>
    </>
  );
};
