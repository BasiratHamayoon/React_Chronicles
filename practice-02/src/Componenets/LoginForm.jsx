import { useState } from 'react';
import '../index.css';
export const LoginForm = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser((prev) => ({...prev, [name]: value}));
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        setUser({email:"", password: ""})
    }
    return(
        <>
            <form className="container" onSubmit={handleSubmit}>
                <h1>SignIn</h1>
                <p>Login to the existsing account</p>
                <label htmlFor='email'>
                    <p>Email:</p>
                    <input type="email"
                    name="email" 
                    placeholder='Email'
                    autoComplete='new-email'
                    required
                    value={user.email}
                    onChange={handleChange}
                     />
                </label>
                 <label htmlFor='password'>
                    <p>Password:</p>
                    <input type="password"
                    name="password" 
                    placeholder='Password'
                    autoComplete='new-password'
                    required
                    value={user.password}
                    onChange={handleChange}
                     />
                </label>
                <button type='submit'>SignIn</button>
            </form>
        </>
    )
}