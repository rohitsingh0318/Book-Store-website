import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards';
import { Link } from 'react-router-dom';

function Course() {
    console.log(list);
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div className='mt-28 justify-center items-center text-center'>
                <h1 className='text-2xl font-semibold md:text-4xl'>we are delight to have <span className='text-pink-500'>here! 😊</span> </h1>
                <p className='mt-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt impedit doloremque neque dolores voluptates quis laudantium eum aspernatur 
                    consequuntur minus error, ea soluta accusantium a consectetur atque placeat nihil! Neque.</p>
                <Link to={"/"}>
                    <button className='mt-6 text-white px-4 py-2  bg-pink-500 rounded-md hover:bg-pink-700 duration-300 '>Back</button>
                </Link>
            </div>
            <div className='mt-20 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4 justify-items-center'>
                {
                    list.map((item) => (
                        <Cards key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Course