import './App.css';
import Header from './Components/header';
import Home from './Pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateDebtur from './Pages/createDebtur';
import CreateUser from './Pages/createUser';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
    </div> 
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createDebtur" element={<CreateDebtur />}></Route>
        <Route path="/createUser" element={<CreateUser />}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
