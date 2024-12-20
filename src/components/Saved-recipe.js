import React, { useState, useEffect } from "react";
import './Saved-recipe.css'
function SavedRecipe() {
  const [savedRecipes, setSavedRecipes] = useState(() => {
    return JSON.parse(localStorage.getItem("savedRecipes")) || [];
  });

  const [editIndex, setEditIndex] = useState(null);
  const [editedRecipe, setEditedRecipe] = useState({ name: "", details: "" });

  useEffect(() => {
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
  }, [savedRecipes]);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveEditedRecipe = () => {
    const updatedRecipes = savedRecipes.map((recipe, index) =>
      index === editIndex ? { ...recipe, ...editedRecipe } : recipe
    );
    setSavedRecipes(updatedRecipes);
    setEditIndex(null);
    setEditedRecipe({ name: "", details: "" });
  };

  const handleRemoveRecipe = (index) => {
    const updatedRecipes = savedRecipes.filter((_, i) => i !== index);
    setSavedRecipes(updatedRecipes);
  };

  return (
    <div className="saved-recipe">
      <h1 className="saved-recipe-heading">Saved Recipes</h1>
      {savedRecipes.length > 0 ? (
        savedRecipes.map((recipe, index) => (
          <div key={index}>
            <h4>{recipe.name}</h4>
            <p>{recipe.details}</p>
            <button onClick={() => { setEditIndex(index); setEditedRecipe(recipe); }} className="edit-btn">Edit</button>
            <button onClick={() => handleRemoveRecipe(index)} className="remove-btn">Remove</button>
          </div>
        ))
      ) : (
        <p className="saved-recipe-p">No saved recipes found.</p>
      )}

      {editIndex !== null && (
        <div className="edit-recipe">
          <h3 className="edit-recipe heading">Edit Recipe</h3>
          <input className="edit-recipe-input"type="text" name="name" value={editedRecipe.name} onChange={handleEditChange} placeholder="Recipe Name" />
          <textarea className="edit-recipe-textarea"name="details" value={editedRecipe.details} onChange={handleEditChange} placeholder="Recipe Details" />
          <button onClick={handleSaveEditedRecipe}>Save Changes</button>
        </div>
      )}
    </div>
  );
}

export default SavedRecipe;
