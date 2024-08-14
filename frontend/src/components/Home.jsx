import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

export default function Home() {
  const navigate = useNavigate();


  useEffect(() => {
    api.post('/api/home',
      { }, 
      { withCredentials: true }
    )
    .then(function (response) {
      //Nothing Yet
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
      if (error.status == 401) {
        navigate('/login');
      }
    });
  }, [navigate]);

  const Logout = () => {
    api.post('/api/logout',
      { },
      { withCredentials: true }
    )
    .then(function (response) {
      navigate("/login");
    })
    .catch(function (error) {
      console.log(error)
      if (error.status == 401) {
        navigate('/login');
      }
    });
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
