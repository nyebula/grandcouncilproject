import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  function login(formData) {
    const username = formData.get("username");
    const password = formData.get("password");
  }
  return (
    <>
      <h1>Login</h1>
      <div className="card">
        <form action="login">
          <input placeholder="Username" type="text" name="username"/>
          <br />
          <input placeholder="Password" type="password" name="password"/>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  )
}

export default App;
