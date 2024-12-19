import React, { useState } from "react";
import "./Generate-recipe.css";

function RecipeGenerator() {
  const [ingredients, setIngredients] = useState([]);
  const [input, setInput] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]); // To store saved recipes
  const [message, setMessage] = useState(""); // To show success message

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
    if (newIngredient) {
      const updated = [...ingredients];
      updated[index] = newIngredient;
      setIngredients(updated);
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
        "Authorization": "Bearer 6TrX117PrrqnYpmkRRgoeQgbqPHRYDrfUq1We4po",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "command-xlarge",
        prompt: `Suggest 5 recipes based on these ingredients: ${ingredients.join(", ")}. Each recipe should strictly follow this format:

        Recipe Name: [Name of the recipe]
        Ingredients: [List the ingredients in a single line separated by commas]
        Steps: [Provide step-by-step instructions with each step starting on a new line]
        
        Example:
        Recipe Name: Simple Dal Makhani
        Ingredients: 1 cup Urad Dal (Black Gram), 1/2 cup Rajma (Kidney Beans), onion, tomatoes, cloves, garlic, green chillies, coriander
        Steps:
        - Soak: Wash and soak Urad Dal and Rajma separately for at least 6-8 hours.
        - Pressure Cook: Drain the soaked lentils and pressure cook them with 4 cups of water for 3-4 whistles. Let the pressure release naturally.
        - Sauté: Heat butter in a pan. Add onions and sauté until golden brown. Add ginger-garlic paste and green chillies. Sauté for a minute.
        - Add Tomatoes: Add chopped tomatoes and cook until they soften and release their juices.
        - Spice Blend: Add red chilli powder, coriander powder, and turmeric powder. Sauté for a minute.
        - Combine: Add the cooked lentils and Rajma to the pan. Stir well and cook for 5-7 minutes on low heat.
        - Simmer: Add garam masala, salt, and 1 cup of water. Simmer for 10-15 minutes, stirring occasionally, until the dal thickens.
        - Garnish: Add cream (optional) and garnish with fresh coriander. Serve hot with rice or roti.

        Ensure each recipe you generate follows the exact same structure as shown in the example.`,
        max_tokens: 1000,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.generations && data.generations.length > 0) {
          const lines = data.generations[0].text.split("\n").filter(line => line);

          const newRecipes = lines.map((line) => {
            const parts = line.split(":");
            return {
              name: parts[0] || "Unknown Recipe",
              steps: parts[1] ? parts[1].split(". ").map(step => step.trim()) : [],
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

  function saveRecipe(recipe) {
    setSavedRecipes([...savedRecipes, recipe]);
    setMessage("Your recipe is successfully saved!");
  }

  function editRecipe(index) {
    const newName = prompt("Edit Recipe Name:", savedRecipes[index].name);
    const newSteps = prompt("Edit Recipe Steps (separate by commas):", savedRecipes[index].steps.join(", "));
    if (newName && newSteps) {
      const updatedRecipes = [...savedRecipes];
      updatedRecipes[index] = {
        ...updatedRecipes[index],
        name: newName,
        steps: newSteps.split(",").map(step => step.trim()),
      };
      setSavedRecipes(updatedRecipes);
      setMessage("Your recipe is successfully updated!");
    }
  }

  return (
    <div className="recipe-generator-form">
      <h1>Recipe Generator</h1>
      <div className="ingredient-div">
        <h3>Ingredients:</h3>
        <input type="text" value={input} placeholder="Enter ingredient" className="ingredient-input" onChange={(e) => setInput(e.target.value)} />
        <button className="ingredient-add-btn" onClick={addIngredient}>Add Ingredient</button>
        <ul className="ingredient-list">
          {ingredients.map((item, index) => (
            <li key={index}>
              {item}
              <img src="https://cdn-icons-png.flaticon.com/128/2356/2356780.png" alt="edit-icon" onClick={() => editIngredient(index)} />
              <img src="https://cdn-icons-png.flaticon.com/128/3096/3096687.png" alt="delete-icon" onClick={() => deleteIngredient(index)} />
            </li>
          ))}
        </ul>
      </div>
      <button className="get-recipe-btn" onClick={fetchRecipes}>Get Recipes</button>
      {recipes.length > 0 && (
        <div className="result">
          <h3>Recipes:</h3>
          {recipes.map((recipe, index) => (
            <div key={index}>
              <h4>{recipe.name}</h4>
              <button onClick={() => saveRecipe(recipe)}>Save Recipe</button>
              <button onClick={() => editRecipe(index)}>Edit Recipe</button>
              <ul>
                {recipe.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      {savedRecipes.length > 0 && (
        <div className="saved-recipes">
          <h3>Saved Recipes:</h3>
          {savedRecipes.map((recipe, index) => (
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
      {message && <p>{message}</p>}
    </div>
  );
}

export default RecipeGenerator;

            