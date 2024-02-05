import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from './login';


function CreateUser({ onUserCreated }) {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: '',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const postResponse = await axios.post('http://127.0.0.1:5000/api/create_user', userData);
            console.log('posted, created', postResponse)
            navigate('/details', { state: { user: userData } });
        } catch (error) {
            console.error('There was an error creating the user:', error);
        }
    };

    return (
        <div >
            <span>Create User</span>
            <form onSubmit={handleSubmit}>
                <input
                    name="username"
                    value={userData.username}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <input
                    name="password"
                    type="password"
                    value={userData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <input
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    name="first_name"
                    value={userData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                />
                <input
                    name="last_name"
                    value={userData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                />
                <button type="submit">Create User</button>
            </form>
            <div>
             <div>
             <span>Already a member? Login instead!</span>
             <Login/>
             </div>
            </div>
        </div>

    );
}

export default CreateUser;
