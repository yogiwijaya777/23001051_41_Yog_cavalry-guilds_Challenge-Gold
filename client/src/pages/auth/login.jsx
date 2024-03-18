import React, { useState } from 'react'
import axios from 'axios'


const Login = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
        error: "",
        message: ""
    })
    console.log(data.message)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/v1/auth/login', {
                email: data.email,
                password: data.password,
            })
            console.log(response)
            if (response.status === 200) {
                setData({ message: response.data.message })
            } else {

                setData({
                    error: 'Invalid Email or Password!'
                });
            }

        } catch (error) {
            // console.log(error.response.data.message)
            setData({
                ...data,
                error: error.response.data.message
            });
        }

    }
    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(name, value)
        setData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    return (
        <div className='auth-wrapper'>
            <div className='auth'>
                <article className='title'>
                    <p>
                        <b>Login</b>
                    </p>
                </article>

                <div className='form'>
                    <input type="text" placeholder='Enter your email' name='email' onChange={handleChange} />
                    <input type="password" placeholder='Enter your password' name='password' onChange={handleChange} />
                    <div className='error-message'>
                        {data.error && <p className='error'>{data.error}</p>}
                        {data.message && <p className='message'>{data.message}</p>}
                        
                        <a href="/" className='link-auth'>Forgot Password?</a>
                    </div>
                    <button className='btn-auth' onClick={handleSubmit}>Login</button>
                    <article className='link-artikel'>
                        <p>Dont have an account? <a href="/signup" className='link-auth'>Signup</a></p>
                    </article>
                </div>

            </div>
        </div>


    )
}

export default Login;