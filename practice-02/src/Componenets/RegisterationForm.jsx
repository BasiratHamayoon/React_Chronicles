import { useState } from 'react';
import '../index.css';
export const RegistrationForm = () => {
    const [ user, setUser ] = useState({
        fullName: "", email: "", password: "", phone: ""
    });
    const handleChange = (e) => {
        const { name, value} = e.target;
        setUser((prev) => ({...prev, [name]: value}));
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        setUser({fullName: "", email: "", password: "", phone: ""})
    }
    
    return (
        <>
            <form className='container' onSubmit={handleSubmit}>
                <h1>SignUp</h1>
                <p>Please fill this form to create an account</p>
                <label htmlFor='fullName'>
                    <p>Full Name:</p>
                    <input type="text"
                    name="fullName" 
                    placeholder='Full Name'
                    required 
                    value={user.fullName}
                    onChange={handleChange}/>
                </label>
                <label htmlFor='email'>
                    <p>Email:</p>
                    <input type="email"
                    name="email" 
                    placeholder='Email'
                    autoComplete='new-email'
                    required
                    value={user.email}
                    onChange={handleChange} />
                </label>
                 <label htmlFor='password'>
                    <p>Password:</p>
                    <input type="password"
                    name="password" 
                    placeholder='Password'
                    autoComplete='new-password'
                    required
                    value={user.password}
                    onChange={handleChange} />
                </label>
                 <label htmlFor='phone'>
                    <p>Contact no:</p>
                    <input type="number"
                    name="phone" 
                    placeholder='Contact no'
                    required
                    value={user.phone} 
                    onChange={handleChange}/>
                </label>
                <p>By creating this account you agree to our
                    <a href='#' style={{color: 'rgb(114, 223, 42)'}}> Terms $ Privacys</a>
                </p>
                <button type='submit'>Signup</button>

            </form>
        </>
    )
}