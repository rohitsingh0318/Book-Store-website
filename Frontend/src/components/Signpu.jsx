import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

function Signpu() {
  return (
    <>
        <div className='flex h-screen justify-center items-center'>
           <div id="my_modal_1" className="border p-6 rounded-md shadow-md w-96">
            <div className="">
                <h3 className="font-bold text-lg">SignUp</h3>
                <div className='mt-4 space-y-3'>
                    <span>Name:</span> <br />
                  <input type="text" placeholder='Enter Your Name' className='w-80 px-3 py-1 border rounded-md outline-none' /><br />
                  <span>Email:</span> <br />
                  <input type="email" placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md outline-none' /><br />
                  <span>Password:</span> <br />
                  <input type="password" placeholder='Enter Your Password' className='w-80 px-3 py-1 border rounded-md outline-none' />
                </div>
                <div className='flex justify-between items-center mt-'>
                  <button className='bg-pink-500 text-white rounded-md mt-4 px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
                  <p>Have Account ? {''} <button  className='underline text-blue-400' 
                       onClick={() => document.getElementById("my_modal_1").showModal()} >Login
                       </button>{" "} <Login/> 
                  </p>
                </div>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <Link to="/" className="btn">Close</Link>
                </form>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Signpu