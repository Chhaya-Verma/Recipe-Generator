import React from "react";
import "./Maincontent.css";
import { useNavigate } from "react-router-dom";

const Maincontent = () => {
    const navigate = useNavigate();

    const handleGenerateRecipeClick = () => {
        navigate("/generate-recipe");

    }
    return (
        <>
         <div className="Maincontent">
                <div className="text-part">
                    <h1>Welcome to Recipe Generator</h1>
                    <h1>Generate Delicious Recipes in Seconds!</h1>
                    <div className="buttons">
                        <button className="generate-recipe" onClick={handleGenerateRecipeClick}>
                            Generate Recipe
                        </button>
                        <button className="go-to-recipe">Go to Recipes</button>
                    </div>
                </div>
                <div className="video-part">
                    <video src="https://cdn.pixabay.com/video/2017/08/25/11562-231234700_tiny.mp4" autoPlay loop muted className="video-1"></video>
                    <video src="https://cdn.pixabay.com/video/2022/07/10/123629-728697948_large.mp4" autoPlay loop muted className="video-2"></video>
                    <video src="https://cdn.pixabay.com/video/2017/08/29/11638-231758689_tiny.mp4" autoPlay loop muted className="video-3"></video>
                    <video src="https://cdn.pixabay.com/video/2017/08/29/11619-231571922_tiny.mp4" autoPlay loop muted className="video-4"></video>
                    <video src="https://media.istockphoto.com/id/1332050255/video/fresh-delicious-vegetables-chicken-and-pasta-around-a-tablet-showing-a-recipe-all-on-the.mp4?s=mp4-640x640-is&k=20&c=kqJvDvT8ulicUDJ-IGsQeCB8R0kkjKbrOj0mjzx_VpA=" autoPlay loop muted className="video-5"></video>
                    <video src="https://media.istockphoto.com/id/673585686/video/young-woman-scrolling-through-recipes-on-her-tablet-in-the-kitchen.mp4?s=mp4-480x480-is&k=20&c=QfGzlCTi70gRs3YdRUiOkWoNVJD-pkizframiR2oZWY=" autoPlay loop muted className="video-6"></video>
                    <video src="https://media.istockphoto.com/id/1889676375/video/fried-rice-in-the-wok-being-mixed-using-a-wooden-spoon.mp4?s=mp4-640x640-is&k=20&c=1OS3dyIl8GzIa59wQ3ue5UatloaKZlZ2jOIAFybHaxE=" autoPlay loop muted className="video-7"></video>
                </div>
            </div>

            {/* Featured Recipes Section */}
            <div className="featured-recipes mt-3">
                <h2 className="featued-heading">Featured AI Generated Recipes</h2>
                <div className="recipes">
                    <img src="https://www.mrcook.app/_next/image?url=https%3A%2F%2Fimages.mrcook.app%2Frecipe-image%2F0190e686-e711-761e-9084-2aaffbff4393%3FcacheKey%3DV2VkLCAyNCBKdWwgMjAyNCAyMDo1NToyMiBHTVQ%3D&w=640&q=75" alt="recipe-img" />
                </div>

                <div className="recipes">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmqiqfZlFRgK-ygwBw4JjAveJdudFm9ux238Hs3WpMNPwCBTqA7UuQA38CR5KVgeCBRS8&usqp=CAU" alt="recipe-img" />
                </div>

                <div className="recipes">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLOj7WzqBNYqxGzCCGz9_UW0k-BHwHh09jaxLaStFyH6lrwKIFS4wJhEHDFNwrPIBdmo&usqp=CAU" alt="recipe-img" />
                </div>

                <div className="recipes">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPq-Af3QG-eMP0ubViAPCn3Z8RXg1rYoNoOQ&s" alt="recipe-img" />
                </div>

                <div className="recipes">
                    <img src="https://creator.nightcafe.studio/jobs/C518qUgSEm6YI2avo7W7/C518qUgSEm6YI2avo7W7--1--eemfr.jpg" alt="recipe-img" />
                </div>

                <div className="recipes">
                    <img src="https://thumbs.dreamstime.com/b/vibrant-delicious-pumpkin-bowl-buddha-recipe-ai-generated-content-vibrant-delicious-pumpkin-bowl-buddha-recipe-design-324081966.jpg" alt="recipe-img" />
                </div>

                <div className="recipes">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRww_QDD1BdS3GdDQL9a1_3Eb94YWDoRh8ENV0KA0bZVFn_ap_ps7A_HwyiWkKlgB1D720&usqp=CAU" alt="recipe-img" />
                </div>

            </div>

            {/* How Recipe Generator Works Section */}
            <div className="how-it-works mt-3">
                <h1 className="how-work-heading">How Recipe Generator Works</h1>
                <div className="steps">
                    <div className="step">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTELl-M3M8eU5aybYn28PTKNEP4tvLqFt-Dg&s" alt="step-img" />
                        <h2>Enter a Prompt</h2>
                        <p>Enter the ingredients you have on hand, or a recipe idea you'd like to try. You can also specify dietary preferences, such as vegan, vegetarian, or gluten-free.</p>
                    </div>
                    <div className="step">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGXXusSZ8TDdG80EDNpPC3Hq8oQwGRuWdFBBQcowtxu-3P4b1Q5kpNHa_4gz78FBfD5g4&usqp=CAU" alt="step-img" />
                        <h2>AI Processes Your Request</h2>
                        <p>ChefAI uses advanced generative AI to process your input and understand the specific requirements for your recipe.</p>
                    </div>

                    <div className="step">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEytOJZa_ce4WmqpM9Cl1oDqYFs4IDua3bzw&s" alt="step-img" />
                        <h2> Recipe Generation</h2>
                        <p>DishGen’s generative AI will parse your request and generate a brand-new recipe in seconds - complete with title, description, ingredients and steps.</p>
                    </div>

                    <div className="step">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBvVXqhAk5kQ7S3XSyhFn89BIsK9gBPMEbHg&s" alt="step-img" />
                        <h2>Customize your Recipe</h2>
                        <p>In seconds, ChefAI creates a unique recipe tailored to your needs, including the recipe title, detailed description, ingredients list, and step-by-step cooking instructions.</p>
                    </div>

                    <div className="step">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXbKuKR38IECO6zfhHluLWXC55CWqP6k3afYuIXqouthW3BbrPaXAiafu-4PHERWcTpM&usqp=CAU" alt="step-img" />
                        <h2>Modify & Save</h2>
                        <p>If the recipe isn't perfect the first time, you can request modifications. Then, register for a free account to save, print, and share all your recipe creations.</p>
                    </div>
                </div>
            </div>

            

            {/* Testimonials/Reviews Section, FAQ (Frequently Asked Questions) , Blog or Resources Section, Achievements or Statistics Section, Contact Us Section, Gallery Section, Subscription Section, Partnerships or Sponsors Section, Pricing Section (if applicable), Success Stories or Case Studies,  Events or Workshops Section */}
         </>
    )
}

export default Maincontent;;

