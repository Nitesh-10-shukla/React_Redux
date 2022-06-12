import './App.css';
import { Route, Routes,Router} from 'react-router-dom';
import Home from './components/Home.jsx';
import Blog from './components/Main/Blog'
import Services from './components/Main/Services'
import Nav from './components/Nav';
import Register from './components/Main/Register';
import Productbycategory from './components/Main/Productbycategory'
import Login from './components/Main/Login';
function App() {
  return (
    <>
<Nav/>
    <Routes>
      <Route exact path='/' element={<Services/>}  />
      <Route exact path='/Blog' element={<Blog/>}  />
      <Route exact path='/Services' element={<Home/>}  />
      <Route exact path='/Productbycategory' element={<Productbycategory/>}  />
      <Route exact path='/Register' element={<Register/>}  />
      <Route exact path='/Login' element={<Login/>}  />

    </Routes>
    </>
  );
}

export default App;
