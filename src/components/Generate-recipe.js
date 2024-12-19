import React, { useState } from "react";
import "./Generate-recipe.css";

function RecipeGenerator() {
  const [ingredients, setIngredients] = useState([]);
  const [input, setInput] = useState("");
  const [recipes, setRecipes] = useState([]);

  function addIngredient() {
    if (input.trim() !== "" && !ingredients.includes(input)) {
      setIngredients([...ingredients, input]);
      setInput("");
    } else {
      alert("Enter a valid or new ingredient.");
    }
  }

  function editIngredient(index) {
    const newIngredient = prompt("Edit ingredient:", ingredients[index]);
    if (newIngredient && newIngredient.trim() !== "") {
      const updated = [...ingredients];
      updated[index] = newIngredient;
      setIngredients(updated);
    } else {
      alert("Enter a valid ingredient.");
    }
  }

  function deleteIngredient(index) {
    const updated = ingredients.filter((_, i) => i !== index);
    setIngredients(updated);
  }

  function fetchRecipes() {
    if (ingredients.length === 0) {
      alert("Add at least one ingredient.");
      return;
    }

    setRecipes([{ name: "Loading recipes...", steps: [] }]);

    fetch("https://api.cohere.ai/v1/generate", {
      method: "POST",
      headers: {
        Authorization: `Bearer 6TrX117PrrqnYpmkRRgoeQgbqPHRYDrfUq1We4po`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "command-xlarge",
        prompt: `Suggest 5 recipes based on these ingredients: ${ingredients.join(", ")}.`,
        max_tokens: 1000,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.generations && data.generations.length > 0) {
          const lines = data.generations[0].text
            .split("\n")
            .filter((line) => line);

          const newRecipes = lines.map((line) => {
            const parts = line.split(":");
            return {
              name: parts[0] || "Unknown Recipe",
              steps: parts[1] ? parts[1].split(". ").map((step) => step.trim()) : [],
            };
          });

          setRecipes(newRecipes);
        } else {
          alert("No recipes found.");
          setRecipes([]);
        }
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
        setRecipes([]);
      });
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
              {item} {" "}
              <img
                src="https://cdn-icons-png.flaticon.com/128/2356/2356780.png"
                alt="edit-icon"
                onClick={() => editIngredient(index)}
              ></img>
              <img
                src="https://cdn-icons-png.flaticon.com/128/3096/3096687.png"
                alt="delete-icon"
                onClick={() => deleteIngredient(index)}
              ></img>
            </li>
          ))}
        </ul>
      </div>
      <button className="get-recipe-btn" onClick={fetchRecipes}>
        Get Recipes
      </button>
      {recipes.length > 0 && (
        <div className="result">
          <h3>Recipes:</h3>
          {recipes.map((recipe, index) => (
            <div key={index}>
              <h4>{recipe.name}</h4>
              <ul>
                {recipe.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecipeGenerator;
