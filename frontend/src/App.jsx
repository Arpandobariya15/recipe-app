import React, { useEffect, useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home'
import axios from 'axios'
import MainNavigation from './component/MainNavigation'
import AddFoodRecipe from './pages/AddFoodRecipe'

const getAllRecipes = async () => {
  let allRecipes = []
  await axios.get('http://localhost:1000/recipe').then(res => {
    allRecipes = res.data
  })
  return allRecipes
}

const router = createBrowserRouter([
  {path: "/", element: <MainNavigation/>, children: [
      { path: "/", element: <Home />, loader:getAllRecipes },
      { path: "/myRecipe", element: <Home />,  },
      { path: "/favRecipe", element: <Home />, },
      { path: "/addRecipe", element: <AddFoodRecipe />, },

    ]
  }

])

const App = () => {


  return (
    <div>
      
      <>
        <RouterProvider router={router}></RouterProvider>
      </>
    </div>
  )
}

export default App
