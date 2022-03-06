import logo from './logo.svg';
import './App.css';
import Data from './components/properties/Data';
import Menu from './components/general components/Menu';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import HomePage from './components/header/HomePage';
import PropertySearch from './components/properties/PropertySearch';
import SelectedProperty from './components/properties/SelectedProperty';
import Header from './components/header/Header';
import SideBar from './components/general components/SideBar';


const App = () => {

  return (
    <div>
      
      <Router>
        <Header />
        <SideBar/>
        <Routes>
          <Route path="/search-properties" element={<PropertySearch/>}/>
          <Route path="selected-property/:id" element={<SelectedProperty />}/>
        </Routes>
      </Router>
      

     
    </div>
  )
}


export default App;
