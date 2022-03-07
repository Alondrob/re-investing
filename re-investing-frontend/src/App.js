import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import PropertySearch from './components/properties/PropertySearch';
import SelectedProperty from './components/properties/SelectedProperty';
import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar'
import SideBarIcon from './components/sideBar/SideBarIcon';
import Blogs from './components/blogs/Blogs';
import Funding from './components/properties/Funding';
import Reports from './components/user/Reports';
import SavedProperties from './components/user/SavedProperties';
import Calculator from './components/properties/Calculator';


const App = () => {

  return (
    <div>
      
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<SideBar/>}></Route>
          <Route path="/search-properties" element={<PropertySearch/>}/>
          <Route path="selected-property/:id" element={<SelectedProperty />}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/funding" element={<Funding/>}/>
          <Route path="/repots" element={<Reports/>}/>
          <Route path="/saved-properties" element={<SavedProperties/>}/>
          <Route path="/calculator" element={<Calculator/>}/>
        </Routes>
      </Router>
      

     
    </div>
  )
}


export default App;
