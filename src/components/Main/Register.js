import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../Style/common.css' 

const Register = () => {
    const [user, setuser] = useState({firstname:"",lastname:"",email:"",number:"",password:"",ConfirmPassword:""});
    const fetchInput = (event) => {
        const { name, value } = event.target
        setuser({...user, [name]: value })
    }
    const register = async () => {
        let { ConfirmPassword, ...restdata } = user

        if (user?.firstname == "" || user?.lastname == "" || user?.email == "" || user?.number=="" || user?.password=="" || user?.ConfirmPassword=="") {
            alert("all fields are required")
        }
        else if (user?.password != user?.ConfirmPassword) {
            alert("Password not matched")
        }
        else{
        await axios.post(`http://localhost:3000/api/register`, { ...restdata })
            .then((res) => {
                if (res.status == 200) {
                    alert("sucesss")
                    setuser("")
                }
                else {
                    alert("failed")
                }
            })
    }}
    return (
        <div className='container  mt-5 py-5'>
            <form class=" w-50 mx-auto bg-white shadow-sm p-3 mb-5 bg-white rounded p-3 form">
                <div class="py-1">
                    <label for="validationDefault01" class="form-label">First name</label>
                    <input type="text" class="form-control" id="validationDefault01" name='firstname' onChange={fetchInput} value={user?.firstname || ""} required />
                </div>
                <div class="py-1">
                    <label for="validationDefault02" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="validationDefault02" name='lastname' onChange={fetchInput} value={user?.lastname || ""} required />
                </div>
                <div class="py-1">
                    <label for="validationDefault02" class="form-label">Email</label>
                    <input type="email" class="form-control" id="validationDefault02" name='email' onChange={fetchInput} value={user?.email || ""} required />
                </div>
                <div class="py-1">
                    <label for="validationDefault02" class="form-label">Mobile</label>
                    <input type="number" class="form-control" id="validationDefault02" name='number' onChange={fetchInput} value={user?.number || ""} required />
                </div>
                <div class="py-1">
                    <label for="validationDefault02" class="form-label">Password</label>
                    <input type="password" class="form-control" id="validationDefault02" name='password' onChange={fetchInput} value={user?.password || ""} required />
                </div>
                <div class="py-1">
                    <label for="validationDefault02" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="validationDefault02" name='ConfirmPassword' onChange={fetchInput} value={user?.ConfirmPassword || ""} required />
                </div>
               
                <div class="d-flex justify-content-center my-3">
                    <button class="btn btn-primary" type="button" onClick={register}>Register</button>
                </div>
                <p className='text-center'>Already registered <Link to="/Login">Login</Link></p>
            </form>
        </div>
    )
}

export default Register