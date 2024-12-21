import React, { useEffect, useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './component/Header'
import Footer from './component/Footer'
import  axios  from 'axios'


const App = () => {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getAllRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:1000/recipe');
        setRecipes(response.data);
      } catch (error) {
        console.error("There was an error fetching the recipes!", error);
      }
    };
    getAllRecipes();
  }, []);
  

  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home recipes={recipes}/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
