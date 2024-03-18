import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2'

const Signup = () => {
    const Navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        password: "",
        error: "",
        name : ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/v1/auth/register', {
                name:data.name,
                email: data.email,
                password: data.password,
            })
            if (response.status === 201) {
                Swal.fire("Account created !");
                window.setTimeout(() => {
                    Navigate('/login');
                  }, 2000);
            } else {
               
                setData({
                    error: 'Something went wrong!'
                });
            }
           
        } catch (error) {
            console.log(error)
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
        <section className='auth-wrapper'>
            <section className='auth'>
                <article className='title'>
                    <p>
                        <b>Signup</b>
                    </p>
                </article>

                <section className='form'>
                    <input type="text" name="name" placeholder='Enter your name' onChange={handleChange} />
                    <input type="text" name="email" placeholder='Enter your email' onChange={handleChange} />
                    <input type="password" placeholder='Create a password' name='password' onChange={handleChange} />
                   

                    <button className='btn-auth' onClick={handleSubmit}>Signup</button>
                    <article className='link-artikel'>
                        <p>Already have an account? <a href="/login" className='link-auth'>Login</a></p>
                    </article>
                </section>

            </section>
        </section>

    )
}

export default Signup;