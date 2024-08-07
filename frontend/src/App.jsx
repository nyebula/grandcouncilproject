import { Route, Routes } from 'react-router-dom'
import './App.css'

//Component Imports
import LoginForm from './components/LoginForm'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"/>
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
