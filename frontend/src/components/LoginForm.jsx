import { useState } from 'react'

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 

  function handleSubmit(event) {
    event.preventDefault();

    console.log(username);
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
            onChange={e => setUsername(e.target.value)}
          />
          <br />
          <button type='submit' onClick={handleSubmit}>Login</button>
        </form>
      </div>
      </>
  );
}
