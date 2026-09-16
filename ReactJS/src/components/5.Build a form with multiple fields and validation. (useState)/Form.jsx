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
    
    const [error,setError] = useState({});


    function handleChange(e){
        const {name,vlaue} =e.target;
        setForm({
            ...form,
            [name]:value
        })
    }

    function handleForm(e){
        e.preventDefault();
        let validationErrors = {};

        if(form.age && Number(form.age) < 0){
            validationErrors.age = "Age cannot be negative";

        }
        if(form.password !== form.confirmPassword){
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


            



        </form>
        
        
        
        
        
        </div>
)}