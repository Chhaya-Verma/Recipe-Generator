import React from 'react';
import { useNavigate } from "react-router-dom";
import './Aboutus.css';

const AboutUs = () => {

  const navigate = useNavigate();
  const handleGenerateRecipeClick = () => {
    navigate("/generate-recipe");

  }
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
            <div className="our-mission-card col-md-3 mb-4 ml-5">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT46L2GfVWqNvEHnYY-E5ig3dtYDvHrcQyOeWdWgLKmUw7TjR3ZE1jDqGqNOERXu4hODD4&usqp=CAU" alt="mission-img" className="mission-img mt-1" style={{ width: "140px", height: "140px", borderRadius: "50%" }} />
              <h4 className="mission-title mt-3">Empower individuals Cook</h4>
              <p className="mission-description MT-10">Empowering individuals to cook healthy, delicious, and innovative meals effortlessly using AI technology.</p>
            </div>

            <div className="our-mission-card  col-md-3 mb-4 ml-5">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsiNI7oClMQ95c-Dt96sNYXEn7s3z16AIDA&s" alt="mission-img" className="mission-img mt-1" style={{ width: "140px", height: "140px", borderRadius: "50%" }} />
              <h4 className="mission-title mt-3">Simple Meal Planning</h4>
              <p className="mission-description">Simplifying meal planning and recipe creation for all dietary preferences and lifestyles</p>
            </div>

            <div className="our-mission-card col-md-3 mb-4 ml-5">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezYovTGh0i33ZdwGOSlCzqsyFCgZpk7D3xD-W5PH9zzmFk4hvPkb23H12Nr1iYhsUUIg&usqp=CAU" alt="mission-img" className="mission-img mt-1" style={{ width: "140px", height: "140px", borderRadius: "50%" }} />
              <h4 className="mission-title mt-3">sustainable & use of available ingredients</h4>
              <p className="mission-description">Promoting sustainable cooking by encouraging the use of available ingredients and reducing food waste.</p>
            </div>

            <div className="our-mission-card  col-md-3 mb-4 ml-5">
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
            <div className="our-vision-card col-md-3 mb-4 ml-5">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6m6oSAWUrdSx0ipTWZCCqqyngmtfMM6XjoteF2eV994xCLLIU6MSiOUQcOQQDuSGFIjQ&usqp=CAU" alt="vision-img" className="vision-img mt-1" style={{ width: "140px", height: "140px", borderRadius: "50%" }} />
              <p className="vision-description MT-10">To become a global leader in AI-powered personalized recipe generation.</p>
            </div>

            <div className="our-vision-card col-md-3 mb-4 ml-5">
              <img src="https://img.freepik.com/premium-photo/traditional-indian-mother-cooking-chef-vector_974732-65801.jpg" alt="vision-img" className="vision-img mt-1" style={{ width: "140px", height: "140px", borderRadius: "50%" }} />
              <p className="vision-description">To inspire a culture of smart, sustainable, and innovative cooking practices worldwide.</p>
            </div>

            <div className="our-vision-card col-md-3 mb-4 ml-5">
              <img src="https://media.licdn.com/dms/image/D5612AQFjiA_ZERqd6A/article-cover_image-shrink_600_2000/0/1700207100523?e=2147483647&v=beta&t=CHaBvvHXtHEOBIIiALltUW2uce1ZYOOQHzfcL13TO_M" alt="vision-img" className="vision-img mt-1" style={{ width: "140px", height: "140px", borderRadius: "50%" }} />
              <p className="vision-description">To bridge the gap between technology and culinary arts, redefining how people interact with food.</p>
            </div>

            <div className="our-vision-card col-md-3 mb-4 ml-5" >
              <img src="https://www.chitkara.edu.in/blogs/wp-content/uploads/2024/01/Culinary-Arts-Industry-in-2030.jpg" alt="vision-img" className="vision-img mt-1" style={{ width: "140px", height: "140px", borderRadius: "50%" }} />
              <p className="vision-description">To create a future where everyone can cook confidently and enjoyably, supported by ChefAI’s advanced tools.</p>
            </div>
          </div>
        </section>


        {/* OUR TEAM SECTION*/}
        <section className="our-team my-5 ml-5 mr-5">
          <h1 className="our-team-heading mb-4 text-center">Our Team</h1>
          <div className="our-team d-flex flex-row flex-wrap justify-content-center">
            <div className="our-team-card col-md-3 mb-4 ml-5">
              <img src="https://www.shutterstock.com/image-photo/portrait-young-girl-holding-laptop-260nw-2235564131.jpg" alt="our-team-img" className="our-team-img mt-1" style={{ width: "140px", height: "140px", borderRadius: "50%" }} />
              <h4 className="team-title mt-3">Vaishnavi Verma</h4>
              <h5 className="team-role">Founder & Culinary Technologist</h5>
              <p className="vision-description MT-10">Vaishnavi Verma, the mastermind behind ChefAI, blends a passion for culinary arts with cutting-edge AI expertise. With a vision to simplify cooking for all, they have redefined how recipes are created, making them accessible and exciting for every home cook.</p>
            </div>

            <div className="our-team-card col-md-3 mb-4 ml-5">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSMd9px2uZSAaEh9UvGPYLItsUy7VQSt-SlDGEn2waLEwmYd81YPbiUzbX4Lir1goADSI&usqp=CAU" alt="our-team-img" className="our-team-img mt-1" style={{ width: "140px", height: "140px", borderRadius: "50%" }} />
              <h4 className="team-title mt-3">Piyush Thakur</h4>
              <h5 className="team-role">Lead AI Developer</h5>
              <p className="vision-description">Piyush Thakur, is the brain behind ChefAI’s advanced algorithms. Their expertise in machine learning ensures that every recipe generated is not only accurate but also tailored to user preferences, offering a seamless culinary experience.</p>
            </div>

            <div className="our-team-card  col-md-3 mb-4 ml-5">
              <img src="https://media.istockphoto.com/id/1352606416/photo/young-woman-working-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=uKfBCoTeP54nA8KOzXDLIyoU31nZ4a4UreFE4p_x_3A=" alt="our-team-img" className="our-team-img mt-1" style={{ width: "140px", height: "140px", borderRadius: "50%" }} />
              <h4 className="team-title mt-3">Harshita Sahu</h4>
              <h5 className="team-role">Recipe Curator</h5>
              <p className="vision-description">Harshita Sahu, brings decades of culinary expertise to ChefAI. They ensure that every AI-generated recipe is flavorful, balanced, and easy to follow, bridging the gap between technology and traditional cooking wisdom.</p>
            </div>

            <div className="our-team-card col-md-3 mb-4 ml-5">
              <img src="https://photosly.net/wp-content/uploads/2023/12/hidden-face-dp-girls16.jpg" alt="our-team-img" className="our-team-img mt-1" style={{ width: "140px", height: "140px", borderRadius: "50%" }} />
              <h4 className="team-title mt-3">Chhaya Verma</h4>
              <h5 className="team-role">Product Designer</h5>
              <p className="vision-description">Chhaya Verma, Taste Tester is the voice of ChefAI’s users, ensuring that the platform is user-friendly, visually appealing, and intuitive. They believe that cooking with AI should be as enjoyable as eating the food itself!</p>
            </div>
          </div>
        </section>


        <footer className="about-footer">
          <h2 className='about-footer-heading'>Ready to Cook with Chef AI?</h2>
          <button className='about-footer-button' onClick={handleGenerateRecipeClick}>Get Started</button> {/* Call the function on button click */}
        </footer>
      </div>
    </>
  );
};

export default AboutUs;
