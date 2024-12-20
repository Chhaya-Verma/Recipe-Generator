import React, { useState, useEffect } from "react";

function SavedRecipe() {
  const [savedRecipes, setSavedRecipes] = useState(() => {
    return JSON.parse(localStorage.getItem("savedRecipes")) || [];
  });

  useEffect(() => {
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
  }, [savedRecipes]);

  return (
    <div>
      <h1>Saved Recipes</h1>
      {savedRecipes.length > 0 ? (
        savedRecipes.map((recipe, index) => (
          <div key={index}>
            <h4>{recipe.name}</h4>
            <p>{recipe.details}</p>
          </div>
        ))
      ) : (
        <p>No saved recipes found.</p>
      )}
    </div>
  );
}

export default SavedRecipe;
