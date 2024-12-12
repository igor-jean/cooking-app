import React from 'react';

const Card = ({recipe}) => {
    return (
        <div className="card">
            <h3>{recipe.strMeal}</h3>
            <img src={recipe.strMealThumb} alt={"Photo of " + recipe.strMeal}/>
            <p>{recipe.strInstructions}</p>
        </div>
    );
};

export default Card;