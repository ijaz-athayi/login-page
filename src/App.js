import Login from './components/Login';
import Home from './components/Homepage'
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Homepage from './components/Homepage';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Homepage />} />
          
        </Routes>
        </BrowserRouter>  

    </div>
  );
}

export default App;
