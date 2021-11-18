import React, { useState, useEffect } from "react";

export default function Register(props) {
    const [{ email, name, password, password_confirmation }, setValues] =
        useState({
            email: "",

            name: "",

            password: "",

            password_confirmation: "",
        });

    const handleSubmit = async (event) => {
        event.preventDefault();

        let request_data = { email, name, password, password_confirmation };

        const response = await fetch("/register", {
            method: "POST",

            body: JSON.stringify(request_data),

            headers: {
                Accept: "application/json",

                "Content-type": "application/json",

                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
        });

        const response_data = await response.json();
    };

    const handleChange = (event) => {
        const allowed_names = [
                "name",
                "email",
                "password",
                "password_confirmation",
            ],
            name = event.target.name,
            value = event.target.value;

        if (-1 !== allowed_names.indexOf(name)) {
            setValues((prev_values) => {
                return {
                    ...prev_values,

                    [name]: value,
                };
            });
        }
    };

    return (
        <form action="/register" method="post" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
            />
            <label>Email</label>
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
            />
            <label>Password</label>
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
            />
            <label>Password Confirmation</label>
            <input
                type="password"
                name="password_confirmation"
                value={password_confirmation}
                onChange={handleChange}
            />

            <button>Register</button>
        </form>
    );
}
