import React,{useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Login = () => {
    const [user, setuser] = useState({email:"",password:""});
    const fetchInput = (event) => {
        const { name, value } = event.target
        setuser({...user, [name]: value })
    }
    const Login = async () => {

        if (user?.email == "" ||  user?.password=="") {
            alert("all fields are required")
        }
        else{
        await axios.post(`http://localhost:3000/api/login`, user)
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
    <div className='mt-5 py-5'>
        <form className='w-50 mx-auto bg-white shadow-sm p-3 mb-5 bg-white rounded p-3 form'>
        <div class="py-1">
                    <label for="validationDefault02" class="form-label">Email</label>
                    <input type="email" class="form-control" id="validationDefault02" name='email' onChange={fetchInput} value={user?.email || ""} required />
                </div>
                <div class="py-1">
                    <label for="validationDefault02" class="form-label">Password</label>
                    <input type="password" class="form-control" id="validationDefault02" name='password' onChange={fetchInput} value={user?.password || ""} required />
                </div>
                <div class="d-flex justify-content-center my-3">
                    <button class="btn btn-primary" type="button" onClick={Login}>Login</button>
                </div>
                <p className='text-center'>Don't have account <Link to="/Register">Register</Link></p>
                </form>
    </div>
  )
}

export default Login