import React, { useState } from "react";
import "./Contactus.css";


function Contactus() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [errors, setErrors] = useState({});
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    }

    function validateForm() {
        const newErrors = {};
        if (formData.name === "") {
            newErrors.name = "Name is required";
        }
        if (formData.email === "") {
            newErrors.email = "Email is required";
        }
        else if (!formData.email.includes("@")) {
            newErrors.email = "Email is required with proper format";
        }
        if (formData.message === "") {
            newErrors.message = "Message cannot be empty";
        }
        return newErrors;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        }
        else {
            alert("Form Submitted Successfully");
            console.log(formData);
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
        }
    }
    return (
        <div className="contact-us">
            <img src="https://www.shutterstock.com/image-vector/group-businessman-businesswoman-holding-contact-260nw-507167809.jpg" alt="contact-img-top"></img>
            <div className="contact-form">
                <h1 className="contact-us-heading">Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div className="form-fields">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Enter you name" value={formData.name} onChange={handleChange} required></input>
                            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                        

                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Enter you email" value={formData.email} onChange={handleChange} required></input>
                            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                          

                            <label for="message">Message:</label>
                            <textarea id="message" name="message" placeholder="Enter your message" value={formData.message} onChange={handleChange} required></textarea>
                            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
                          
                        </div>
                        <div className="contact-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_PkxFj_kUzek90QltQRFHbqffW5q8E1B_NKO3O8OgKeGUhy4AyLi2pgF10vFL_b4OnmQ&usqp=CAU" alt="contact-img"></img>
                        </div>
                    </div>
                    <button type="submit">Submit</button>


                </form>
            </div>
        </div>
    )
}

export default Contactus;