import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../utils/api';

export default function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 

  function handleSubmit(event) {
    event.preventDefault();

    api.post('/login', {
      username: username,
      password: password,
    },
      { withCredentials: true }
    )
    .then(function (response) {
      console.log(response);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
  
  return(
    <>
      <h1>Login</h1>
      <div className='card'>
        <form>
          <input 
            placeholder='Username' 
            type='text' 
            value={username} 
            onChange={e => setUsername(e.target.value)}
          />
          <br />
          <input 
            placeholder='Password' 
            type='password' 
            name='password' 
            onChange={e => setPassword(e.target.value)}
          />
          <br />
          <button type='submit' onClick={handleSubmit}>Login</button>
        </form>
      </div>
      </>
  );
}
