import React, { useState } from "react";
import "./Generate-recipe.css";

function RecipeGenerator() {
  const [ingredient, setIngredient] = useState(""); 
  const [ingredientList, setIngredientList] = useState([]); 

  
  function addIngredient() {
    if (ingredient.trim() !== "" && !ingredientList.includes(ingredient)) {
      setIngredientList([...ingredientList, ingredient]); 
      setIngredient("");
    } else {
      alert("Please enter a valid or new ingredient."); 
    }
  }

  
  function editIngredient(index) {
    const edited = prompt("Edit the ingredient:", ingredientList[index]);
    if (edited && edited.trim() !== "") {
      const updatedList = ingredientList.slice(); 
      updatedList[index] = edited; 
      setIngredientList(updatedList); 
    } else {
      alert("Please enter a valid ingredient."); 
    }
  }

  
  function deleteIngredient(index) {
    const updatedList = ingredientList.filter((item, i) => i !== index); 
    setIngredientList(updatedList); 
  }

  return (
    <div className="recipe-generator-form">
      <h1>Recipe Generator</h1>
      <div>
        <h3>Ingredients:</h3>
        <input type="text" value={ingredient}  placeholder="Enter ingredient " onChange={(e) => setIngredient(e.target.value)}  />
          <button onClick={addIngredient}>Add Ingredient</button>
        <ul>
          {ingredientList.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => editIngredient(index)}>Edit</button>
              <button onClick={() => deleteIngredient(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RecipeGenerator;
