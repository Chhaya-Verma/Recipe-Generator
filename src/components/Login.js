import React, { useState } from "react";
import "./Login.css";
function LoginForm() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState(" ");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setErrors("");
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        let errorMessage = "";
        if (!formData.username == "") {
            errorMessage = "Username is required";
        }
        if (!formData.email === "") {
            setErrors("Email is required");
        }
        if (!formData.password === "") {
            setErrors("Password is required");
        }
        else if (formData.password.length < 6) {
            setErrors("Password must be atleast 6 characters long");
        }
        if (errorMessage) {
            setErrors(errorMessage);
        }
        else {
            alert('Form submitted successfully!');
        }
    };
    return (
        <div className="login-form">
            <h1> Login/Register</h1>
            <div className="form-fields">
                <form onSubmit={handleSubmit}>
                    <div className="form-fields">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4w2eJOt6Z9fJurNkR1vX552blMPHwZTUowQ&s" className="icon"></img>
                        <input type="text" id="username" name="username" placeholder="Enter your username" value={formData.username} onChange={handleChange} required></input>
                    </div>

                    <div className="form-fields">
                        <img src="https://cdn-icons-png.flaticon.com/512/3178/3178158.png" className="icon"></img>
                        <input type='email' id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required></input>
                    </div>

                    <div className="form-fields">
                        <img src="https://icons.veryicon.com/png/o/miscellaneous/face-monochrome-icon/password-76.png" className="icon"></img>
                        <input type="password" id="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required></input>
                    </div>
                    <button type="submit">Login</button>
                    <p className="login-para"style={{ color: "red" }}>{errors}</p>
                </form>
                <div className="right-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfkrxgygRp2W5UBHSF_UjHVRxdjW8kAQlUCoXNFZldgxUMOcH2OeS2UcAc0UXlmlBJhFI&usqp=CAU" alt="login-img"></img>
                </div>
            </div>
        </div>
    );
}
export default LoginForm;