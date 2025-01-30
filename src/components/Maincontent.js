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
                    </div>
                </div>
                <div className="video-part">
                    <video src="https://cdn.pixabay.com/video/2017/08/25/11562-231234700_tiny.mp4" autoPlay loop muted className="video-1"></video>
                    <video src="https://cdn.pixabay.com/video/2022/07/10/123629-728697948_large.mp4" autoPlay loop muted className="video-2"></video>
                    <video src="https://cdn.pixabay.com/video/2017/08/29/11638-231758689_tiny.mp4" autoPlay loop muted className="video-3"></video>
                    <video src="https://cdn.pixabay.com/video/2022/10/08/133987-758543857_large.mp4" autoPlay loop muted className="video-4"></video>
                    <video src="https://media.istockphoto.com/id/1332050255/video/fresh-delicious-vegetables-chicken-and-pasta-around-a-tablet-showing-a-recipe-all-on-the.mp4?s=mp4-640x640-is&k=20&c=kqJvDvT8ulicUDJ-IGsQeCB8R0kkjKbrOj0mjzx_VpA=" autoPlay loop muted className="video-5"></video>
                    <video src="https://media.istockphoto.com/id/673585686/video/young-woman-scrolling-through-recipes-on-her-tablet-in-the-kitchen.mp4?s=mp4-480x480-is&k=20&c=QfGzlCTi70gRs3YdRUiOkWoNVJD-pkizframiR2oZWY=" autoPlay loop muted className="video-6"></video>
                    <video src="https://media.istockphoto.com/id/1889676375/video/fried-rice-in-the-wok-being-mixed-using-a-wooden-spoon.mp4?s=mp4-640x640-is&k=20&c=1OS3dyIl8GzIa59wQ3ue5UatloaKZlZ2jOIAFybHaxE=" autoPlay loop muted className="video-7"></video>
                    <video src="https://cdn.pixabay.com/video/2017/08/30/11657-231758747_large.mp4" autoPlay loop muted className="video-8"></video>
                </div>
            </div>

            {/* Featured Recipes Section */}
            <div className="featured-recipes mt-5">
                <h2 className="featued-heading">Featured AI Generated Recipes</h2>
                <div className="recipes ml-5">
                    <img src="https://www.mrcook.app/_next/image?url=https%3A%2F%2Fimages.mrcook.app%2Frecipe-image%2F0190e686-e711-761e-9084-2aaffbff4393%3FcacheKey%3DV2VkLCAyNCBKdWwgMjAyNCAyMDo1NToyMiBHTVQ%3D&w=640&q=75" alt="recipe-img" />
                </div>

                <div className="recipes ml-5">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmqiqfZlFRgK-ygwBw4JjAveJdudFm9ux238Hs3WpMNPwCBTqA7UuQA38CR5KVgeCBRS8&usqp=CAU" alt="recipe-img" />
                </div>

                <div className="recipes ml-5">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLOj7WzqBNYqxGzCCGz9_UW0k-BHwHh09jaxLaStFyH6lrwKIFS4wJhEHDFNwrPIBdmo&usqp=CAU" alt="recipe-img" />
                </div>

                <div className="recipes ml-5">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPq-Af3QG-eMP0ubViAPCn3Z8RXg1rYoNoOQ&s" alt="recipe-img" />
                </div>

                <div className="recipes ml-5">
                    <img src="https://creator.nightcafe.studio/jobs/C518qUgSEm6YI2avo7W7/C518qUgSEm6YI2avo7W7--1--eemfr.jpg" alt="recipe-img" />
                </div>

                <div className="recipes ml-5">
                    <img src="https://thumbs.dreamstime.com/b/vibrant-delicious-pumpkin-bowl-buddha-recipe-ai-generated-content-vibrant-delicious-pumpkin-bowl-buddha-recipe-design-324081966.jpg" alt="recipe-img" />
                </div>

                <div className="recipes ml-5">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRww_QDD1BdS3GdDQL9a1_3Eb94YWDoRh8ENV0KA0bZVFn_ap_ps7A_HwyiWkKlgB1D720&usqp=CAU" alt="recipe-img" />
                </div>

            </div>

            {/* How Recipe Generator Works Section */}
            <div className="how-it-works mt-5">
                <h1 className="how-work-heading">How Recipe Generator Works</h1>
                <div className="steps">
                    <div className="step ml-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTELl-M3M8eU5aybYn28PTKNEP4tvLqFt-Dg&s" alt="step-img" />
                        <h2>Enter a Prompt</h2>
                        <p>Enter the ingredients you have on hand, or a recipe idea you'd like to try. You can also specify dietary preferences, such as vegan, vegetarian, or gluten-free.</p>
                    </div>
                    <div className="step ml-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGXXusSZ8TDdG80EDNpPC3Hq8oQwGRuWdFBBQcowtxu-3P4b1Q5kpNHa_4gz78FBfD5g4&usqp=CAU" alt="step-img" />
                        <h2>AI Processes Your Request</h2>
                        <p>ChefAI uses advanced generative AI to process your input and understand the specific requirements for your recipe.</p>
                    </div>

                    <div className="step ml-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEytOJZa_ce4WmqpM9Cl1oDqYFs4IDua3bzw&s" alt="step-img" />
                        <h2> Recipe Generation</h2>
                        <p>DishGen’s generative AI will parse your request and generate a brand-new recipe in seconds - complete with title, description, ingredients and steps.</p>
                    </div>

                    <div className="step ml-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBvVXqhAk5kQ7S3XSyhFn89BIsK9gBPMEbHg&s" alt="step-img" />
                        <h2>Customize your Recipe</h2>
                        <p>In seconds, ChefAI creates a unique recipe tailored to your needs, including the recipe title, detailed description, ingredients list, and step-by-step cooking instructions.</p>
                    </div>

                    <div className="step ml-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXbKuKR38IECO6zfhHluLWXC55CWqP6k3afYuIXqouthW3BbrPaXAiafu-4PHERWcTpM&usqp=CAU" alt="step-img" />
                        <h2>Modify & Save</h2>
                        <p>If the recipe isn't perfect the first time, you can request modifications. Then, register for a free account to save, print, and share all your recipe creations.</p>
                    </div>
                </div>
            </div>


            { /* WHY CHEFAI SECTION*/}
            <section className="why-chefAI my-5 mt-5">
                <h1 className="why-chefAI-heading mb-4 text-center">Why ChefAI</h1>
                <div className="why-container d-flex flex-row flex-wrap justify-content-center">
                    <div className="col-md-3 mb-4">
                        <img src="https://o.aolcdn.com/hss/storage/midas/e1546132992c379617566ecbf95a1a33/204031640/Save+Time.jpg" alt="" className="card-img mt-3" style={{ width: "100px", height: "100px", borderRadius: "50%" }}></img>
                        <h4 className="card-title mt-3">Save Time</h4>
                        <p className="card-dis MT-10">ChefAI helps you prepare recipes in no time with smart
                            suggestions.</p>
                    </div>

                    <div className="col-md-3 mb-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYEXfZnhvpO6WN3V27LH4JVTxkDKwoMi3_5QOBNwailR8VJ5GG5S_D71pqIDBKAhugyq4&usqp=CAU" alt="" className="card-img mt-3" style={{ width: "100px", height: "100px", borderRadius: "50%" }}></img>
                        <h4 className="card-title mt-3">Healthy Recipes</h4>
                        <p className="card-dis">ChefAI ensures healthy and balanced meal plans.
                        </p>
                    </div>

                    <div className="col-md-3 mb-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbmaOzJOxa3nNTmXRIbxrAhkzhs1arz9x7q-KSVEBPOPRqAsOSA8FUsXRfbBit9V8abZg&usqp=CAU" alt="" className="card-img mt-3" style={{ width: "100px", height: "100px", borderRadius: "50%" }}></img>
                        <h4 className="card-title mt-3">Easy to Use</h4>
                        <p className="card-dis">User-friendly interface makes cooking fun and easy.</p>
                    </div>

                    <div className="col-md-3 mb-4">
                        <img src="https://images.jdmagicbox.com/quickquotes/listicle/crop_1712623633989_0xrcr_1407x664.jpg" alt="" className="card-img mt-3" style={{ width: "100px", height: "100px", borderRadius: "50%" }}></img>
                        <h4 className="card-title mt-3">Affordable Meals</h4>
                        <p className="card-dis">Get affordable meal suggestions based on your budget.</p>
                    </div>
                </div>
            </section>


            {/* Features Section */}
            <section className="features my-5 mt-5">
                <h1 className="features-heading mb-4 text-center">Features</h1>
                <div className="features-containder d-flex flex-row flex-wrap justify-content-center">
                    <div className="col-md-3 mb-4 ml-5">
                        <img src="https://images.pexels.com/photos/7241482/pexels-photo-7241482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="card-img mt-3" style={{ width: "100px", height: "100px", borderRadius: "50%" }}></img>
                        <h4 className="card-title mt-3">Personalized Recipes</h4>
                        <p className="card-dis MT-10">Get recipe suggestions tailored to your taste preferences and dietary needs. SmartChef AI learns what you like and recommends dishes you'll love.</p>
                    </div>

                    <div className="col-md-3 mb-4 ml-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe58SemhRExfOu6J5ojLlPv_Dok_oWEpGD4Q&s" alt="" className="card-img mt-3" style={{ width: "100px", height: "100px", borderRadius: "50%" }}></img>
                        <h4 className="card-title mt-3">Smart Ingredient Substitution</h4>
                        <p className="card-dis">Missing an ingredient? No worries! SmartChef AI provides smart substitutions so you can still prepare your meal without compromising on taste.
                        </p>
                    </div>

                    <div className="col-md-3 mb-4 ml-5">
                        <img src="https://thumbs.dreamstime.com/b/flat-illustration-businesswoman-step-up-staircase-illuminated-flashlight-career-guidance-spotlight-to-success-discover-342902739.jpg" alt="" className="card-img mt-3" style={{ width: "100px", height: "100px", borderRadius: "50%" }}></img>
                        <h4 className="card-title mt-3">Step-by-Step Guidance</h4>
                        <p className="card-dis">Cook with confidence! SmartChef AI offers easy-to-follow, step-by-step instructions and timers to help you prepare perfect meals.</p>
                    </div>


                    <div className="col-md-3 mb-4 ml-5">
                        <img src="https://media.istockphoto.com/id/1403121168/vector/3d-isometric-flat-vector-conceptual-illustration-of-reducing-food-waste.jpg?s=612x612&w=0&k=20&c=TkU3FcZHtx892qnphIey_g-zdTFz4QFmBANpK8k1RQU=" alt="" className="card-img mt-3" style={{ width: "100px", height: "100px", borderRadius: "50%" }}></img>
                        <h4 className="card-title mt-3">Reduce Food Wastage</h4>
                        <p className="card-dis">Make the most of what's in your fridge. SmartChef AI suggests recipes using the ingredients you already have, helping you save food and money.</p>
                    </div>
                </div>
            </section>



            {/* Customer Testimonials for ChefAI  */}
            <section className="customer-tesimonials my-5 mt-5">
                <h1 className="customer-tesimonials-heading mb-4 text-center">Customer Testimonials</h1>
                <div className="customer-tesimonials-containder d-flex flex-row flex-wrap justify-content-center">
                    <div className="col-md-3 mb-4 ml-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQWZp5BXKHmC7hHuO4zutelwwJDX7plnARclnSCPyicycTyVnAdRNpvf6l2pOh8SUgL8&usqp=CAU" alt="" className="card-img mt-3" style={{ width: "100px", height: "100px", borderRadius: "50%" }}></img>
                        <h4 className="card-title mt-3">Ina Dewangan, Food Blogger</h4>
                        <h3>⭐⭐⭐⭐⭐</h3>
                        <p className="card-dis MT-10">ChefAI has completely changed the way I cook! I can just enter the ingredients I have, and it suggests the most delicious recipes. It’s like having my own personal chef! I’ve saved so much time and reduced food waste too!</p>
                    </div>

                    <div className="col-md-3 mb-4 ml-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAxYysFX1TpmAU24DFMZbLDOoEu7ureZgMcQ&s" alt="" className="card-img mt-3" style={{ width: "100px", height: "100px", borderRadius: "50%" }}></img>
                        <h4 className="card-title mt-3">Shivansh Verma, Software Engineer</h4>
                        <h3>⭐⭐⭐⭐⭐</h3>
                        <p className="card-dis">I often run out of ingredients while cooking, but ChefAI’s smart substitution feature always saves the day. It not only provides alternatives but also makes sure the flavor is perfect. I can’t imagine cooking without it anymore!"

                        </p>
                    </div>

                    <div className="col-md-3 mb-4 ml-5">
                        <img src="https://photosvibe.in/wp-content/uploads/cute-girl-pic11.jpg" alt="" className="card-img mt-3" style={{ width: "100px", height: "100px", borderRadius: "50%" }}></img>
                        <h4 className="card-title mt-3">Nitya Gupta, Homemaker</h4>
                        <h3>⭐⭐⭐⭐</h3>
                        <p className="card-dis">As someone with specific dietary needs, finding suitable recipes was always a challenge. ChefAI has made it effortless by suggesting recipes that fit my diet perfectly. It’s my go-to kitchen companion!"</p>
                    </div>


                    <div className="col-md-3 mb-4 ml-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSseLWBA5vnNgZUNgnXmla469KhKwXmJs1F7Q&s" alt="" className="card-img mt-3" style={{ width: "100px", height: "100px", borderRadius: "50%" }}></img>
                        <h4 className="card-title mt-3">Vivaan Rathore, Fitness Coach</h4>
                        <h3>⭐⭐⭐⭐⭐</h3>
                        <p className="card-dis">ChefAI has made meal prep so much easier. Whether I’m cooking for one or hosting a dinner party, it always has the perfect recipes for me. I highly recommend it to anyone who loves cooking!</p>
                    </div>
                </div>
            </section>


            {/*TRANDING RECIPE  */}
            <section className="trending-recipes my-5 mt-5">
                <h1 className="tranding-heading mb-4 text-center">Trending Recipes</h1>
                <div className="tranding-recipes-container d-flex flex-row flex-wrap justify-content-center">
                    <div className="recipe-card col-md-3 mb-4 ml-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG2K7ruDy5cSMNheMF8Y-uvY6xv0xE7RFi3g&s" alt="tranding-recipe-img" className="recipe-img"></img>
                        <h4 className="recipe-title mt-3">Vegan Pasta Salad</h4>
                        <p className="recipe-dis">⭐ 4.8 | This refreshing pasta salad is perfect for a light lunch or dinner. It's packed with fresh veggies and tossed in a tangy vinaigrette dressing.</p>

                    </div>

                    <div className="recipe-card col-md-3 mb-4 ml-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbgC7Ivqi39q2Ni31ECzWw8-m_78xeKiY0kC5KXFlLiv3VRnjCrulXOY1wj1FSRQrEhfI&usqp=CAU" alt="tranding-recipe-img" className="recipe-img"></img>
                        <h4 className="recipe-title mt-3">Biryani</h4>
                        <p className="recipe-dis">This refreshing pasta salad is perfect for a light lunch or dinner. It's packed with fresh veggies and tossed in a tangy vinaigrette dressing.</p>

                    </div>

                    <div className="recipe-card col-md-3 mb-4 ml-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDWnekjaSEOYPFPE88oUQXN8wSjpphz2vdlQ&s" alt="tranding-recipe-img" className="recipe-img"></img>
                        <h4 className="recipe-title mt-3">Panir</h4>
                        <p className="recipe-dis">This refreshing pasta salad is perfect for a light lunch or dinner. It's packed with fresh veggies and tossed in a tangy vinaigrette dressing.</p>

                    </div>

                    <div className="recipe-card col-md-3 mb-4 ml-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0HzvLzPMfOoE7rirXOxHqQkca1fzY_0u0U2jn3BPUYN7WyXns6ft1iMJw8xgploVTF8&usqp=CAU" alt="tranding-recipe-img" className="recipe-img"></img>
                        <h4 className="recipe-title mt-3">Chaat</h4>
                        <p className="recipe-dis">This refreshing pasta salad is perfect for a light lunch or dinner. It's packed with fresh veggies and tossed in a tangy vinaigrette dressing.</p>

                    </div>

                    <div className="recipe-card col-md-3 mb-4 ml-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUBJMCfzZQOOrwCxwWmpN4DerxOyTn7CXZ6hR3YqHAkVKCK7ZLmwsz6kXi0zJI4rQSbCI&usqp=CAU" alt="tranding-recipe-img" className="recipe-img"></img>
                        <h4 className="recipe-title mt-3">Chinese Pakoda</h4>
                        <p className="recipe-dis">This refreshing pasta salad is perfect for a light lunch or dinner. It's packed with fresh veggies and tossed in a tangy vinaigrette dressing.</p>

                    </div>

                    {/* <div className="recipe-card col-md-3 mb-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkX_viAetdiVywIpGr8fTrVvlxsLktRWbsfKcJ_LdTKkPHwjmfH_40-QwOaS1t80hRR3k&usqp=CAU" alt="tranding-recipe-img" className="recipe-img"></img>
                        <h4 className="recipe-title mt-3">Roast Chicken</h4>
                        <p className="recipe-dis">This refreshing pasta salad is perfect for a light lunch or dinner. It's packed with fresh veggies and tossed in a tangy vinaigrette dressing.</p>

                    </div>

                    <div className="recipe-card col-md-3 mb-4">
                        <img src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2021-11-Arrabbiata-Sauce%2F211029-PAMU-THEKITCHN-0061" alt="tranding-recipe-img" className="recipe-img"></img>
                        <h4 className="recipe-title mt-3">Pasta</h4>
                        <p className="recipe-dis">This refreshing pasta salad is perfect for a light lunch or dinner. It's packed with fresh veggies and tossed in a tangy vinaigrette dressing.</p>

                    </div> */}
                </div>


            </section>


            <footer class="footer-section py-5">
                <div class="container">
                    <div class="row">

                        <div class="col-md-4 mb-3">
                            <h5>About ChefAI</h5>
                            <p>ChefAI is your ultimate cooking assistant. Discover delicious recipes, explore unique ingredients, and make cooking an enjoyable experience with our AI-powered platform.</p>
                        </div>
                        <div class="col-md-4 mb-3">
                            <h5>Quick Links</h5>
                            <ul class="list-unstyled">
                                <li><a href="#home" class="text-white">Home</a></li>
                                <li><a href="#about" class="text-white">About Us</a></li>
                                <li><a href="#recipes" class="text-white">Recipes</a></li>
                                <li><a href="#contact" class="text-white">Contact</a></li>
                            </ul>
                        </div>

                        <div class="col-md-4 mb-3">
                            <h5>Contact Information</h5>
                            <p><i class="fas fa-envelope"></i> info@chefai.com</p>
                            <p><i class="fas fa-phone"></i> +123 456 7890</p>
                            <p><i class="fas fa-map-marker-alt"></i> 123 Culinary St, Food City</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 text-center mt-4">
                            <p>&copy; 2024 ChefAI. All Rights Reserved.</p>
                            <div class="social-links">
                                <a href="https://facebook.com" class="text-white mx-2"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com" class="text-white mx-2"><i class="fab fa-twitter"></i></a>
                                <a href="https://instagram.com" class="text-white mx-2"><i class="fab fa-instagram"></i></a>
                                <a href="https://linkedin.com" class="text-white mx-2"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Testimonials/Reviews Section, FAQ (Frequently Asked Questions) , Blog or Resources Section, Achievements or Statistics Section, Contact Us Section, Gallery Section, Subscription Section, Partnerships or Sponsors Section, Pricing Section (if applicable), Success Stories or Case Studies,  Events or Workshops Section */}
        </>
    )
}

export default Maincontent;;

