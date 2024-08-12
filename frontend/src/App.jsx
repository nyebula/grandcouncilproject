import { Route, Routes } from 'react-router-dom'
import './App.css'

//Component Imports
import LoginForm from './components/LoginForm'
import HomePage from './pages/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
