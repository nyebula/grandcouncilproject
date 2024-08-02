import { useState } from 'react';
import axios from 'axios';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 

  function handleSubmit(event) {
    event.preventDefault();

    axios.post('api/login', {
      username: username,
      password: password,
    })
    .then(function (response) {
      console.log(resopnse);
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
