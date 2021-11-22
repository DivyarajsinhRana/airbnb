import Home from './Home';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import SearchPage from './SearchPage';
import Login from './Login';
function App() {
  return (
    <>
    <Router>
     <Header />
     <Routes>
         <Route path="/" element ={<Home />}/> 
         <Route path="/Search" element={<SearchPage/>} />
         <Route path="/login" element={<Login/>} />
     </Routes>
     <Footer />
    </Router>
    </>
  );
}

export default App;
