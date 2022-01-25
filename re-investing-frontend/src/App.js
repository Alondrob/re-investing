import logo from './logo.svg';
import './App.css';
import Data from './components/properties/Data';
import Menu from './components/Menu';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import HomePage from './components/general components/HomePage';
import PropertySearch from './components/properties/PropertySearch';
import SelectedProperty from './components/properties/SelectedProperty';


const App = () => {

  return (
    <div>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search-properties" element={<PropertySearch/>}/>
          <Route path="selected-property/:id" element={<SelectedProperty />}/>
        </Routes>
      </Router>
      

     
    </div>
  )
}


export default App;
