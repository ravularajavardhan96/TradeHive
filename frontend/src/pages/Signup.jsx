import React,{useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {toast,ToastContainer} from 'react-toastify';

const Signup =  () =>{
    const navigate = useNavigate();
    const [inputValue , setInputValue] = useState({
        email:"",
        username:"",
        password:"",
    });

    // const {email,username,password} = inputValue;
    const handleOnChange  = (e)=>{
        let { name,value} = e.target;
        setInputValue({...inputValue,[name]:value});
    };
    const handleError=(err)=>{
        toast.error(err,{
            position:"bottom-left",

        })
    }

    const handleSuccess=(msg)=>{
        toast.success(msg,{
            position:"bottom-right",
        });
    }

    const handleSubmit =async(e)=>{
        e.preventDefault();
        try{
            const {data} =await axios.post("https://backend-zerodha-soz4.onrender.com/signup",{...inputValue},{withCredentials:true});
            const {success,message} =data;
            if(success){
                handleSuccess(message);
                setTimeout(()=>{
                    navigate("/login");
                },1000);
            }else{
                handleError(message);
            }
        }
        catch(e){
            console.log(e);
        }
        setInputValue({...inputValue,
                      email:"",
                      password:"",
                      username:""
        });
    };
    return(
        <div className='h-100 d-flex align-items-center justify-content-center mt-5 p-5'>
            <div className='form_container p-5 mt-3 '>
            <h2 className='text-primary'>Signup page</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input placeholder='Enter email' name='email' type='email' onChange={handleOnChange}/>
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input placeholder='Enter password' name='password' type='password' onChange={handleOnChange}/>
                </div>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input placeholder='Enter username' name='username' type='text' onChange={handleOnChange}/>
                </div>
                <div>
                    <button className='bg-primary'>
                        submit
                    </button>
                    <span className='mt-3'>Already have an account? <Link to={"/login"} className='text-primary '>Login</Link></span>
                </div>
            </form>
            <ToastContainer/>
        </div>
        </div>
        
    );
};

export default Signup;

