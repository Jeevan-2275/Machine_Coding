import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        age: "",
        address: "",
        password: "",
        confirmPassword: ""
    })

    const [error, setError] = useState({});


    function handleChange(e) {
        const { name, vlaue } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    function handleForm(e) {
        e.preventDefault();
        let validationErrors = {};

        if (form.age && Number(form.age) < 0) {
            validationErrors.age = "Age cannot be negative";

        }
        if (form.password !== form.confirmPassword) {
            validationErrors.confirmPassword = "Passwords do not match";
            setError(validationErrors);
            return;
        }
        alert("Form submitted successfully");

        setForm({
            firstName: "",
            lastName: "",
            email: "",
            gender: "",
            age: "",
            address: "",
            password: "",
            confirmPassword: ""
        })
        setError({});

    }

    return (
        <div className="form-container">
            <form className="form-box" onSubmit={handleForm}>

                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={form.firstName} onChange={handleChange} />

                </div>

                <div className="form-group">
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={form.lastName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Gender:</label>
                    <div className="radio-group">
                        <label><input type="radio" name="gender" value="male" checked={form.gender === "male"} onChange={handleChange} />Male</label>
                        <label><input type="radio" name="gender" value="female" checked={form.gender === "female"} onChange={handleChange} />Female</label>
                        <label><input type="radio" name="gender" value="other" checked={form.gender === "other"} onChange={handleChange} />Other</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Age:</label>
                    <input type="number" name="age" value={form.age} onChange={handleChange} />
                    {error.age && <span className="error">{error.age}</span>}
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input type="text" name="address" value={form.address} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
                    {error.confirmPassword && <span className="error">{error.confirmPassword}</span>}
                </div>

                <button type="submit">Submit</button>

            </form>
          </div>
    )
}
export default Form;