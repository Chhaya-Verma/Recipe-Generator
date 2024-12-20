import React from 'react';
import './Aboutus.css';

const AboutUs = () => {
  return (
    <>
      <div className="about-us">
        <header className="about-header">
          <h1 className='about-header-heading'>Meet Chef AI – Your Culinary Companion!</h1>
          <p>
            Chef AI is here to revolutionize the way you cook. From managing your ingredients to giving you tailored recipe suggestions, Chef AI is your go-to kitchen assistant.
          </p>
        </header>

        {/* OUR MISSION SECTION*/}
        <section className="our-mission my-5 ml-5 mr-5">
          <h1 className="mission-heading mb-4 text-center">Our Mission</h1>
          <div className="mission d-flex flex-row flex-wrap justify-space-between">
            <div className="our-mission-card col-md-3 mb-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT46L2GfVWqNvEHnYY-E5ig3dtYDvHrcQyOeWdWgLKmUw7TjR3ZE1jDqGqNOERXu4hODD4&usqp=CAU" alt="mission-img" className="mission-img mt-1" style={{ width: "140px", height: "140px", borderRadius: "50%" }} />
              <h4 className="mission-title mt-3">Empower individuals Cook</h4>
              <p className="mission-description MT-10">Empowering individuals to cook healthy, delicious, and innovative meals effortlessly using AI technology.</p>
            </div>

            <div className="our-mission-card  col-md-3 mb-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsiNI7oClMQ95c-Dt96sNYXEn7s3z16AIDA&s" alt="mission-img" className="mission-img mt-1" style={{ width: "140px", height: "140px", borderRadius: "50%" }} />
              <h4 className="mission-title mt-3">Simple Meal Planning</h4>
              <p className="mission-description">Simplifying meal planning and recipe creation for all dietary preferences and lifestyles</p>
            </div>

            <div className="our-mission-card col-md-3 mb-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezYovTGh0i33ZdwGOSlCzqsyFCgZpk7D3xD-W5PH9zzmFk4hvPkb23H12Nr1iYhsUUIg&usqp=CAU" alt="mission-img" className="mission-img mt-1" style={{ width: "140px", height: "140px", borderRadius: "50%" }} />
              <h4 className="mission-title mt-3">sustainable & use of available ingredients</h4>
              <p className="mission-description">Promoting sustainable cooking by encouraging the use of available ingredients and reducing food waste.</p>
            </div>

            <div className="our-mission-card  col-md-3 mb-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLX6OguDPj5I8DZYSh4PmFfn-uRy3txHr7yT1OtqZN2rbK1QxoMEvjL14KXGh98KFAXHQ&usqp=CAU" alt="mission-img" className="mission-img mt-1" style={{ width: "140px", height: "140px", borderRadius: "50%" }} />
              <h4 className="mission-title mt-3">Enjoyable and healthy</h4>
              <p className="mission-description">Making personalized cooking accessible and enjoyable for everyone, from beginners to seasoned chefs.</p>
            </div>
          </div>
        </section>


        {/* OUR VISION SECTION*/}
        <section className="our-vision my-5 ml-5 mr-5">
          <h1 className="our-vision-heading mb-4 text-center">Our Vision</h1>
          <div className="vision d-flex flex-row flex-wrap justify-content-center">
            <div className="our-vision-card col-md-3 mb-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6m6oSAWUrdSx0ipTWZCCqqyngmtfMM6XjoteF2eV994xCLLIU6MSiOUQcOQQDuSGFIjQ&usqp=CAU" alt="vision-img" className="vision-img mt-1" style={{ width: "140px", height: "140px", borderRadius: "50%" }} />
              <p className="vision-description MT-10">To become a global leader in AI-powered personalized recipe generation.</p>
            </div>

            <div className="our-vision-card col-md-3 mb-4">
              <img src="https://img.freepik.com/premium-photo/traditional-indian-mother-cooking-chef-vector_974732-65801.jpg" alt="vision-img" className="vision-img mt-1" style={{ width: "140px", height: "140px", borderRadius: "50%" }} />
              <p className="vision-description">To inspire a culture of smart, sustainable, and innovative cooking practices worldwide.</p>
            </div>

            <div className="our-vision-card col-md-3 mb-4">
              <img src="https://media.licdn.com/dms/image/D5612AQFjiA_ZERqd6A/article-cover_image-shrink_600_2000/0/1700207100523?e=2147483647&v=beta&t=CHaBvvHXtHEOBIIiALltUW2uce1ZYOOQHzfcL13TO_M" alt="vision-img" className="vision-img mt-1" style={{ width: "140px", height: "140px", borderRadius: "50%" }} />
              <p className="vision-description">To bridge the gap between technology and culinary arts, redefining how people interact with food.</p>
            </div>

            <div className="our-vision-card col-md-3 mb-4">
              <img src="https://www.chitkara.edu.in/blogs/wp-content/uploads/2024/01/Culinary-Arts-Industry-in-2030.jpg" alt="vision-img" className="vision-img mt-1" style={{ width: "140px", height: "140px", borderRadius: "50%" }} />
              <p className="vision-description">To create a future where everyone can cook confidently and enjoyably, supported by ChefAI’s advanced tools.</p>
            </div>
          </div>
        </section>


        <footer className="cta">
          <h2>Ready to Cook with Chef AI?</h2>
          <button><a href="./src/components/Generate-recipe.js" >Get Started</a></button>
        </footer>
      </div>
    </>
  );
};

export default AboutUs;
