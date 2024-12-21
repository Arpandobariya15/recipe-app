import React, { useEffect } from 'react'
import foodImg from '../assets/foodRecipe.png'
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";

const RecipeItems = ({ allRecipes }) => {
    // useEffect(() => {
    //     console.log(allRecipes);

    // }, [])
    // console.log(allRecipes);

    return (
        <>
            <div className='card-container'>
                {
                    allRecipes?.map((item, i) => {
                        return (
                            <div key={i} className='card'>
                                <img src={foodImg} width="120px" height="100px"></img>
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
