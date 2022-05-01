import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userAction';
import Error from '../components/Error';
import Loading from '../components/Loading';

export default function Loginscreen (){
    const [email, setmail] = useState('');
    const [password, setpassword] = useState('');
    const loginstate = useSelector(state=>state.loginUserReducer)
    const {loading , error} = loginstate


    const dispatch = useDispatch()

    useEffect(()=> {

        if(localStorage.getItem('currentUser')){
            window.location.href = '/'
        }

    },[])

    function login(){
    
            const user = {
                email,
                password
            }
            console.log(user);
            dispatch(loginUser(user))
        }
    
   

    return (
        <div>
          <div className='row justify-content-center mt-5'>
                <div className='col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded'>
                    <h2 className='text-center m-2' style={{ fontSize: '35px' }}>Login</h2>

                    {loading && (<Loading/>)}
                    {error && (<Error error='Invalid Credentials'/>)}


                    <div>
                        <input type="text" placeholder='email' className='form-control' value={email} required onChange={(e)=>{setmail(e.target.value)}}  />
                        <input type="text" placeholder='password' className='form-control' value={password} required onChange={(e)=>{setpassword(e.target.value)}} />
                        <button onClick={login} className='btn mt-3 mb-3'>LOGIN</button>
                        <br/>
                        <a style={{color: 'black'}} href='/register' className='mt-2'>Click here to Register</a>
                    </div>

                </div>
            </div>
        </div>
    )
}