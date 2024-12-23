import React, { useEffect } from 'react'
import foodImg from '../assets/foodRecipe.png'
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { useLoaderData } from 'react-router-dom';

const RecipeItems = () => {
    const allRecipes = useLoaderData()

    return (
        <>
            <div className='card-container'>
                {
                    allRecipes?.map((item, i) => {
                        return (
                            <div key={i} className='card'>
                                <img src={`http://localhost:1000/images/${item.coverImage}`} width="120px" height="100px"></img>
                                <div className='card-body'>
                                    <div className='title'>{item.title}</div>
                                    <div className='icons'>
                                        <div className='timer'><BsStopwatchFill />{item.time}</div>
                                        <FaHeart/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default RecipeItems
