import React, { useState } from "react";
import "./Generate-recipe.css";

function RecipeGenerator() {
  const [input, setInput] = useState("");
  const [ingredients, setIngredients] = useState([]);

  function addIngredient() {
    if (input.trim() !== "" && !ingredients.includes(input)) {
      setIngredients([...ingredients, input]);
      setInput("");
    } else {
      alert("Enter a valid or new ingredient.");
    }
  }

  function deleteIngredient(index) {
    const updated = ingredients.filter((_, i) => i !== index);
    setIngredients(updated);
  }

  return (
    <div className="recipe-generator-form">
      <h1>Recipe Generator</h1>
      <div className="ingredient-div">
        <h3>Ingredients:</h3>
        <input
          type="text"
          value={input}
          placeholder="Enter ingredient"
          className="ingredient-input"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="ingredient-add-btn" onClick={addIngredient}>
          Add Ingredient
        </button>
        <ul className="ingredient-list">
          {ingredients.map((item, index) => (
            <li key={index}>
              {item} 
              <button onClick={() => deleteIngredient(index)}>Delete</button>
            </li>
          ))}
        </ul>
        <button
          className="get-recipe-btn"
          onClick={() => alert("Fetching recipes...")}
        >
          Get Recipes
        </button>
      </div>
    </div>
  );
}

export default RecipeGenerator;
