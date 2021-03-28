import React, { useState } from 'react';
import isEmpty from 'validator/lib/isEmpty'
import isEmail from 'validator/lib/isEmail'

function Login (props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validationMsg, steValidationMsg] = useState ('')


    const onChangeEmail = (event) =>{
        const value = event.target.value
        setEmail(value)
    }

    const onChangePassword = (event) =>{
        const value = event.target.value
        setPassword(value)
    }

    const validateAll = () => {
        const msg = {}
        if (isEmpty(email)) {
            msg.email = "Please in put your email"
        } else if (!isEmail(email)) {
            msg.email = "Your email is incorrect"
            
        }

        if (isEmpty(password)) {
            msg.password = "please in put your password"
        }

        steValidationMsg(msg)
        if (Object.keys(msg).length > 0) return false
        return true
    }

    const onSubmitLogin = () => {
        const isValid = validateAll()
        if (!isValid) return true

        // call API login
    }


        return ( 
            <div className = "h-screen flex items-center justify-center" >
                <div className="p-2">
        <div className="block lg:flex bg-white lg:shadow-lg rounded-lg">
            <div className="w-full lg:w-1/3 flex lg:border-r border-gray-200">
                <div className="m-auto rounded-full">
                    <a href="/" className="flex items-base pt-10 lg:p-2 -mb-10 lg:-mb-0">
                        <div className="block lg:hidden text-2xl text-primary hover:text-primary tracking-wide font-semibold uppercase">Parsinta</div>
                    </a>
                </div>
            </div>
            <div className="w-full lg:w-2/3 px-6 py-16">
                <div className="mb-4 font-light tracking-widest text-2xl">LOGIN</div>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-800">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder = "youremail@gmail.com"
                            className="focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" 
                            autoComplete="email" 
                            onChange = {onChangeEmail}
                        />
                        <p> {validationMsg.email} </p>
                   </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 text-sm text-gray-800">Your password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder = "******"
                            className="focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" 
                            autoComplete="current-password" 
                            onChange = {onChangePassword}
                        />
                        <p> {validationMsg.password} </p>
                    </div>
                    <label className="mb-4 flex items-center">
                        <input type="checkbox" className="form-checkbox" name="remeber" id="remeber" defaultChecked/>
                        <span className="ml-2">I want to remember you ?</span>
                    </label>
                    <div className="block md:flex items-center justify-between">
                        <button 
                            type="button" 
                            className="align-middle bg-blue-500 hover:bg-blue-600 text-center px-4 py-2 text-white text-sm font-semibold rounded-lg inline-block shadow-lg"
                            onClick= {onSubmitLogin}
                            >
                            LOGIN
                        </button>

                    </div>
                </form>
            </div>
        </div>
    </div>
          
            </div>
        )
}
export default Login;