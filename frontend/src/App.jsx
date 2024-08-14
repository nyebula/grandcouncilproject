import { Route, Routes } from 'react-router-dom'
import './App.css'

//Component Imports
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="App">
      <Routes>
        //Login and Users with Accounts
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        //Public
        <Route path="/" />
      </Routes>
    </div>
  );
}

export default App;
