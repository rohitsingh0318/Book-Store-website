import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Login</h3>
                <div className='mt-4 space-y-3'>
                  <span>Email:</span> <br />
                  <input type="email" placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md outline-none' /><br />
                  <span>Password:</span> <br />
                  <input type="password" placeholder='Enter Your Password' className='w-80 px-3 py-1 border rounded-md outline-none' />
                </div>
                <div className='flex justify-between items-center mt-'>
                  <button className='bg-pink-500 text-white rounded-md mt-4 px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                  <p>Not registered{''} <Link to="/signup" className='underline text-blue-400'>Signup</Link></p>
                </div>
                <div className="modal-action">
                <form method="dialog">
                  {/* <a href="#" className='btn btn-sm btn-circle'>X</a> */}
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
                </div>
            </div>
        </dialog>
    </div>
  )
}

export default Login